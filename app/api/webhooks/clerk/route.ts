// app/api/webhooks/clerk/route.ts

import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { createClient } from '@supabase/supabase-js';
import type { NextRequest } from 'next/server';
import { sendWelcomeEmail } from '@/lib/email/sendWelcomeEmail';

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

const supabaseUrl = getRequiredEnv('NEXT_PUBLIC_SUPABASE_URL');
const supabaseServiceRoleKey = getRequiredEnv('SUPABASE_SERVICE_ROLE_KEY');

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});

type ClerkEmailAddress = {
  email_address?: string;
  id?: string;
};

type ClerkUserCreatedData = {
  id: string;
  first_name?: string | null;
  last_name?: string | null;
  primary_email_address_id?: string | null;
  email_addresses?: ClerkEmailAddress[];
};

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    if (evt.type !== 'user.created') {
      return Response.json(
        { ok: true, ignored: true, eventType: evt.type },
        { status: 200 }
      );
    }

    const data = evt.data as ClerkUserCreatedData;

    const clerkUserId = data.id;
    const firstName = data.first_name?.trim() || null;

    const primaryEmail =
      data.email_addresses?.find(
        (email) => email.id === data.primary_email_address_id
      )?.email_address ||
      data.email_addresses?.[0]?.email_address ||
      null;

    if (!clerkUserId || !primaryEmail) {
      return Response.json(
        {
          ok: false,
          error: 'Missing Clerk user ID or primary email address.',
        },
        { status: 400 }
      );
    }

    const { data: profile, error: profileLookupError } = await supabaseAdmin
      .from('profiles')
      .select('id, clerk_user_id, welcome_email_sent_at, welcome_email_status')
      .eq('clerk_user_id', clerkUserId)
      .maybeSingle();

    if (profileLookupError) {
      console.error('Webhook profile lookup error:', profileLookupError);

      return Response.json(
        { ok: false, error: 'Failed to look up profile.' },
        { status: 500 }
      );
    }

    if (!profile) {
      console.warn('No profile found for Clerk user yet:', {
        clerkUserId,
        primaryEmail,
      });

      return Response.json(
        {
          ok: true,
          skipped: true,
          reason: 'Profile not found yet.',
        },
        { status: 200 }
      );
    }

    if (profile.welcome_email_sent_at) {
      return Response.json(
        {
          ok: true,
          skipped: true,
          reason: 'Welcome email already sent.',
        },
        { status: 200 }
      );
    }

    const { error: markPendingError } = await supabaseAdmin
      .from('profiles')
      .update({
        welcome_email_status: 'pending',
        welcome_email_error: null,
        updated_at: new Date().toISOString(),
      })
      .eq('id', profile.id);

    if (markPendingError) {
      console.error('Webhook profile pending update error:', markPendingError);

      return Response.json(
        { ok: false, error: 'Failed to mark welcome email as pending.' },
        { status: 500 }
      );
    }

    try {
      const sendResult = await sendWelcomeEmail({
        to: primaryEmail,
        firstName,
      });

      const { error: markSentError } = await supabaseAdmin
        .from('profiles')
        .update({
          welcome_email_sent_at: new Date().toISOString(),
          welcome_email_status: 'sent',
          welcome_email_error: null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', profile.id);

      if (markSentError) {
        console.error('Webhook profile sent update error:', markSentError);

        return Response.json(
          {
            ok: false,
            error: 'Welcome email sent, but failed to update profile status.',
          },
          { status: 500 }
        );
      }

      console.log('Welcome email sent successfully.', {
        clerkUserId,
        profileId: profile.id,
        email: primaryEmail,
        resendResult: sendResult,
      });

      return Response.json(
        {
          ok: true,
          clerkUserId,
          profileId: profile.id,
          email: primaryEmail,
          welcomeEmailStatus: 'sent',
        },
        { status: 200 }
      );
    } catch (sendError) {
      const errorMessage =
        sendError instanceof Error ? sendError.message : 'Unknown send error';

      console.error('Welcome email send error:', {
        clerkUserId,
        profileId: profile.id,
        email: primaryEmail,
        error: sendError,
      });

      const { error: markFailedError } = await supabaseAdmin
        .from('profiles')
        .update({
          welcome_email_status: 'failed',
          welcome_email_error: errorMessage,
          updated_at: new Date().toISOString(),
        })
        .eq('id', profile.id);

      if (markFailedError) {
        console.error('Webhook profile failed update error:', markFailedError);
      }

      return Response.json(
        {
          ok: false,
          error: 'Failed to send welcome email.',
          details: errorMessage,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error verifying Clerk webhook:', error);

    return Response.json(
      { ok: false, error: 'Error verifying Clerk webhook.' },
      { status: 400 }
    );
  }
}