// /lib/profile/getOrCreateProfile.ts

import 'server-only';

import { auth, currentUser } from '@clerk/nextjs/server';
import { createSupabaseAdminClient } from '@/lib/supabase/admin';

export type PwgProfile = {
  id: string;
  clerk_user_id: string;
  email: string | null;
  display_name: string | null;
  created_at: string;
  updated_at: string;
};

export async function getOrCreateProfile(): Promise<PwgProfile> {
  const { userId } = await auth();

  if (!userId) {
    throw new Error('Unauthorized: no signed-in Clerk user');
  }

  const user = await currentUser();

  if (!user) {
    throw new Error('Unauthorized: Clerk user record not found');
  }

  const primaryEmail =
    user.emailAddresses.find(
      (email) => email.id === user.primaryEmailAddressId
    )?.emailAddress ??
    user.emailAddresses[0]?.emailAddress ??
    null;

  const displayName =
    [user.firstName, user.lastName].filter(Boolean).join(' ').trim() ||
    user.username ||
    null;

  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase
    .from('profiles')
    .upsert(
      {
        clerk_user_id: userId,
        email: primaryEmail,
        display_name: displayName,
      },
      {
        onConflict: 'clerk_user_id',
      }
    )
    .select('*')
    .single();

  if (error) {
    throw new Error(`Failed to sync profile: ${error.message}`);
  }

  if (!data) {
    throw new Error('Failed to sync profile: no profile returned');
  }

  const { error: memberStatusError } = await supabase
    .from('member_status')
    .upsert(
      {
        profile_id: data.id,
      },
      {
        onConflict: 'profile_id',
      }
    );

  if (memberStatusError) {
    throw new Error(
      `Failed to ensure member status row: ${memberStatusError.message}`
    );
  }

  return data as PwgProfile;
}