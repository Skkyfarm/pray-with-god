// /lib/member/getMemberStatus.ts

import 'server-only';

import { createSupabaseAdminClient } from '@/lib/supabase/admin';
import { getOrCreateProfile, type PwgProfile } from '@/lib/profile/getOrCreateProfile';

export type PwgMemberStatus = {
  id: string;
  profile_id: string;
  is_member: boolean;
  support_type: 'none' | 'one_time' | 'recurring' | 'manual';
  member_since: string | null;
  last_support_at: string | null;
  expires_at: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export type PwgMemberContext = {
  profile: PwgProfile;
  memberStatus: PwgMemberStatus;
};

export async function getMemberStatus(): Promise<PwgMemberContext> {
  const profile = await getOrCreateProfile();
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase
    .from('member_status')
    .select('*')
    .eq('profile_id', profile.id)
    .single();

  if (error) {
    throw new Error(`Failed to load member status: ${error.message}`);
  }

  if (!data) {
    throw new Error('Failed to load member status: no row returned');
  }

  return {
    profile,
    memberStatus: data as PwgMemberStatus,
  };
}