// /lib/supabase/server.ts

import 'server-only';

import { createClient } from '@supabase/supabase-js';

type AccessTokenGetter = () => Promise<string | null>;

export function createSupabaseServerClient(accessToken: AccessTokenGetter) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabasePublishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');
  }

  if (!supabasePublishableKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY');
  }

  return createClient(supabaseUrl, supabasePublishableKey, {
    accessToken,
  });
}