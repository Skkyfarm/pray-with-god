// lib/email/sendWelcomeEmail.ts

import { Resend } from 'resend';

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

const resendApiKey = getRequiredEnv('RESEND_API_KEY');

const resend = new Resend(resendApiKey);

type SendWelcomeEmailArgs = {
  to: string;
  firstName?: string | null;
};

function escapeHtml(input: string): string {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function sendWelcomeEmail({
  to,
  firstName,
}: SendWelcomeEmailArgs) {
  const safeFirstName = firstName?.trim() ? escapeHtml(firstName.trim()) : null;
  const greetingName = safeFirstName || 'friend';

  const subject = 'Welcome to PrayWithGod.ai';

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 640px; margin: 0 auto; padding: 24px;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">Welcome to PrayWithGod.ai</h1>
      <p style="margin: 0 0 16px 0;">Hi ${greetingName},</p>
      <p style="margin: 0 0 16px 0;">
        Welcome to PrayWithGod.ai. We’re glad you’re here.
      </p>
      <p style="margin: 0 0 16px 0;">
        PrayWithGod.ai is a prayer companion designed to help you begin, continue, and reflect in prayer.
      </p>
      <p style="margin: 0 0 24px 0;">
        When you're ready, you can begin here:
      </p>
      <p style="margin: 0 0 24px 0;">
        <a
          href="https://praywithgod.ai/pray"
          style="display: inline-block; padding: 12px 18px; border-radius: 8px; background: #2563eb; color: #ffffff; text-decoration: none; font-weight: 600;"
        >
          Start Praying
        </a>
      </p>
      <p style="margin: 0 0 12px 0;">
        If you need help, you can reach us at
        <a href="mailto:support@praywithgod.ai">support@praywithgod.ai</a>.
      </p>
      <p style="margin: 24px 0 0 0;">
        Peace,<br />
        PrayWithGod.ai
      </p>
    </div>
  `;

  const text = `Hi ${safeFirstName || 'friend'},

Welcome to PrayWithGod.ai. We’re glad you’re here.

PrayWithGod.ai is a prayer companion designed to help you begin, continue, and reflect in prayer.

Start here:
https://praywithgod.ai/pray

Need help?
support@praywithgod.ai

Peace,
PrayWithGod.ai`;

  const result = await resend.emails.send({
    from: 'PrayWithGod.ai <welcome@send.praywithgod.ai>',
    to,
    subject,
    html,
    text,
  });

  return result;
}