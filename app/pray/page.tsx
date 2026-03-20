// app/pray/page.tsx

'use client';

import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import GuideAvatar from '@/components/GuideAvatar';
import { AVATARS } from '@/lib/avatars';
import type { Tradition } from '@/lib/avatars';
import {
  getPrayerOptions,
  type TraditionKey,
  type PrayerKind,
  type PrayerEntry,
} from '@/lib/prayerCatalog';
import {
  detectPrayerSafety,
  type PrayerSafetyNotice,
} from '@/lib/safety';
import { getPrayerTypeDefinitionHref } from '@/lib/prayerTypeLinks';
import {
  ArrowLeft,
  Sparkles,
  Heart,
  Send,
  RefreshCw,
  CheckCircle2,
  Bookmark,
  Printer,
  Play,
  Square,
  Volume2,
  X,
  XCircle,
  Share2,
  ShieldAlert,
} from 'lucide-react';

type PrayerResponse = {
  prayer?: string;
  error?: string;
  safetyNotice?: PrayerSafetyNotice;
};

type PrayMode = 'free' | 'classic';
type LauncherView = 'quick' | 'free' | 'classic';
type DayPart = 'morning' | 'afternoon' | 'evening' | 'night';

type PrayerRequestPayload = {
  tradition: Tradition;
  mode: PrayMode;
  avatarLabel?: string;
  userName?: string | null;
  feelings?: string[];
  input?: string;
  prayerType?: string;
  selectedPrayerLabel?: string;
  selectedPrayerKind?: PrayerKind;
  intention?: string;
  timezone?: string | null;
  localDateTime?: string | null;
  dayPart?: DayPart | null;
};

const PRAYER_REQUEST_MAX = 500;
const PROTESTANT_PERSONAL_BASE = 'Petitionary Prayers';

const FEELING_OPTIONS = [
  'Grateful',
  'Anxious',
  'Hopeful',
  'Lonely',
  'Confused',
  'Tired',
  'Joyful',
  'Afraid',
  'Guilty',
  'Brokenhearted',
  'Peaceful',
  'Overwhelmed',
  'Discouraged',
  'Angry',
  'Grieving',
  'Worn Out',
  'Restless',
  'Ashamed',
  'Numb',
  'Seeking Clarity',
  'Burdened',
  'Frustrated',
];

const DEFAULT_FEELING = FEELING_OPTIONS[0];

const GRACE_FALLBACK_TYPES = [
  'General Prayer',
  'Peace',
  'Healing',
  'Guidance',
  'Protection',
  'Thanksgiving',
];

function normalizeMode(value: string | null): PrayMode {
  return value === 'classic' ? 'classic' : 'free';
}

function normalizePrayerKind(value: string | null): PrayerKind {
  return value === 'named' ? 'named' : 'type';
}

function normalizeCatalogKey(path: string | null): TraditionKey | null {
  switch ((path || '').toLowerCase()) {
    case 'grace':
      return 'grace';
    case 'christian':
      return 'protestant';
    case 'protestant':
      return 'protestant';
    case 'catholic':
      return 'catholic';
    case 'jewish':
      return 'jewish';
    case 'muslim':
      return 'muslim';
    case 'hindu':
      return 'hindu';
    case 'buddhist':
      return 'buddhist';
    default:
      return null;
  }
}

function mapPathToTradition(path: string | null): Tradition {
  switch ((path || '').toLowerCase()) {
    case 'christian':
      return 'christian' as Tradition;
    case 'protestant':
      return 'protestant' as Tradition;
    case 'catholic':
      return 'catholic' as Tradition;
    case 'jewish':
      return 'jewish' as Tradition;
    case 'muslim':
      return 'muslim' as Tradition;
    case 'hindu':
      return 'hindu' as Tradition;
    case 'buddhist':
      return 'buddhist' as Tradition;
    case 'grace':
    default:
      return 'grace' as Tradition;
  }
}

function isQuietPath(value: string | null) {
  const normalized = (value || '').toLowerCase();
  return normalized === 'quiet' || normalized === 'silence';
}

function toDisplayLabel(value: string | null | undefined) {
  if (!value) return '';
  return value
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function getGuideSubLabel(
  tradition: Tradition,
  avatar: { name?: string } | undefined
) {
  const key = String(tradition).toLowerCase();

  switch (key) {
    case 'grace':
      return avatar?.name || 'Grace';
    case 'catholic':
      return 'Catholic';
    case 'protestant':
      return 'Protestant';
    case 'jewish':
      return 'Jewish';
    case 'muslim':
      return 'Muslim';
    case 'hindu':
      return 'Hindu';
    case 'buddhist':
      return 'Buddhist';
    case 'christian':
      return 'Christian';
    default:
      return toDisplayLabel(key);
  }
}

function getFreePrayerOptions(catalogKey: TraditionKey | null): PrayerEntry[] {
  if (!catalogKey) {
    return GRACE_FALLBACK_TYPES.map((label) => ({
      id: label.toLowerCase().replace(/\s+/g, '-'),
      label,
      gloss: label,
      display: label,
      kind: 'type' as PrayerKind,
    }));
  }

  const items = getPrayerOptions(catalogKey);
  const typeItems = items.filter((item) => item.kind === 'type');

  if (typeItems.length > 0) {
    return typeItems;
  }

  if (items.length > 0) {
    return items;
  }

  return GRACE_FALLBACK_TYPES.map((label) => ({
    id: label.toLowerCase().replace(/\s+/g, '-'),
    label,
    gloss: label,
    display: label,
    kind: 'type' as PrayerKind,
  }));
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getPrayerDisclosure(tradition: Tradition, isClassic: boolean) {
  const key = String(tradition).toLowerCase();

  switch (key) {
    case 'muslim':
      return isClassic
        ? 'This is a tradition-faithful devotional rendering inspired by Islamic tradition. It is not Qur’an, not a translation of Qur’an, and not an official religious text.'
        : 'This is a newly formed devotional prayer inspired by Islamic tradition. It is not Qur’an, not a translation of Qur’an, and not an official religious text.';

    case 'hindu':
      return isClassic
        ? 'This is a tradition-faithful devotional rendering inspired by Hindu tradition. It is not a mantra, scripture, or authoritative translation of sacred text.'
        : 'This is a newly formed devotional prayer inspired by Hindu tradition. It is not a mantra, scripture, or authoritative translation of sacred text.';

    case 'buddhist':
      return isClassic
        ? 'This is a tradition-faithful contemplative rendering inspired by Buddhist tradition. It is not a sutra, chant, or canonical sacred text.'
        : 'This is a newly formed contemplative prayer inspired by Buddhist tradition. It is not a sutra, chant, or canonical sacred text.';

    case 'jewish':
      return isClassic
        ? 'This is a tradition-faithful rendering inspired by Jewish tradition. It is not presented as scripture, formal liturgy, or an authoritative translation.'
        : 'This is a newly formed prayer inspired by Jewish tradition. It is not presented as scripture, formal liturgy, or an authoritative translation.';

    case 'catholic':
      return isClassic
        ? 'This is a tradition-faithful rendering inspired by the selected Catholic prayer or prayer type. It is not a verbatim sacred text or official published liturgical form.'
        : 'This is a newly formed prayer inspired by Catholic tradition. It is not an official liturgical text or authoritative translation of sacred scripture.';

    case 'protestant':
      return isClassic
        ? 'This is a tradition-faithful rendering inspired by the selected Protestant prayer or prayer type. It is not a verbatim sacred text or official published liturgical form.'
        : 'This is a newly formed prayer inspired by Protestant tradition. It is not an official liturgical text or authoritative translation of sacred scripture.';

    case 'christian':
      return isClassic
        ? 'This is a tradition-faithful rendering inspired by the selected Christian prayer or prayer type. It is not a verbatim sacred text or official published liturgical form.'
        : 'This is a newly formed prayer inspired by Christian tradition. It is not an official liturgical text or authoritative translation of sacred scripture.';

    case 'grace':
    default:
      return isClassic
        ? 'This is a tradition-faithful rendering inspired by the selected tradition. It is not a verbatim sacred text or official published liturgical form.'
        : 'This is a newly formed prayer inspired by the selected tradition, offered with reverence and not presented as an official sacred text.';
  }
}

function getLocalTimeContext(): {
  timezone: string | null;
  localDateTime: string | null;
  dayPart: DayPart | null;
} {
  try {
    const now = new Date();
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null;

    const hour24 = Number(
      new Intl.DateTimeFormat('en-US', {
        timeZone: timezone || undefined,
        hour: 'numeric',
        hour12: false,
      }).format(now)
    );

    const dayPart: DayPart =
      hour24 < 5
        ? 'night'
        : hour24 < 12
          ? 'morning'
          : hour24 < 17
            ? 'afternoon'
            : hour24 < 21
              ? 'evening'
              : 'night';

    const localDateTime = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone || undefined,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(now);

    return {
      timezone,
      localDateTime,
      dayPart,
    };
  } catch {
    return {
      timezone: null,
      localDateTime: null,
      dayPart: null,
    };
  }
}

function SafetyNoticeCard({ notice }: { notice: PrayerSafetyNotice }) {
  const isCrisis = notice.level === 'crisis';

  return (
    <div
      className={`rounded-[1.5rem] border px-5 py-4 shadow-sm ${
        isCrisis
          ? 'border-red-200 bg-red-50'
          : 'border-amber-200 bg-amber-50'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
            isCrisis ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
          }`}
        >
          <ShieldAlert className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <div
            className={`text-sm font-semibold uppercase tracking-[0.18em] ${
              isCrisis ? 'text-red-800' : 'text-amber-800'
            }`}
          >
            Safety support
          </div>

          <h3
            className={`mt-2 text-lg font-semibold ${
              isCrisis ? 'text-red-900' : 'text-amber-900'
            }`}
          >
            {notice.title}
          </h3>

          <p
            className={`mt-2 text-sm leading-7 ${
              isCrisis ? 'text-red-900' : 'text-amber-900'
            }`}
          >
            {notice.body}
          </p>

          <ul
            className={`mt-3 space-y-1 text-sm leading-7 ${
              isCrisis ? 'text-red-900' : 'text-amber-900'
            }`}
          >
            {notice.resources.map((resource) => (
              <li key={resource}>• {resource}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PrayPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const abortRef = useRef<AbortController | null>(null);

  const pathParam = searchParams.get('path');
  const modeParam = searchParams.get('mode');
  const prayerLabelParam = searchParams.get('prayerLabel');
  const prayerKindParam = searchParams.get('prayerKind');
  const prayerTypeParam = searchParams.get('prayerType');

  const [userName, setUserName] = useState<string | null>(null);
  const [selectedTradition, setSelectedTradition] = useState<Tradition>('grace');
  const [activeCatalogKey, setActiveCatalogKey] = useState<TraditionKey | null>('grace');
  const [mode, setMode] = useState<PrayMode>('free');
  const [launcherView, setLauncherView] = useState<LauncherView>('free');

  const [selectedPrayerType, setSelectedPrayerType] = useState('');
  const [selectedPrayerLabel, setSelectedPrayerLabel] = useState('');
  const [selectedPrayerKind, setSelectedPrayerKind] = useState<PrayerKind>('type');

  const [selectedFeelings, setSelectedFeelings] = useState<string[]>([DEFAULT_FEELING]);
  const [input, setInput] = useState('');
  const [intention, setIntention] = useState('');
  const [prayerForName, setPrayerForName] = useState('');

  const [isReflecting, setIsReflecting] = useState(false);
  const [prayer, setPrayer] = useState('');
  const [error, setError] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [shareFeedback, setShareFeedback] = useState('');
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [safetyNotice, setSafetyNotice] = useState<PrayerSafetyNotice | null>(null);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState('');
  const [volume, setVolume] = useState(0.2);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('pwg_user_name');
    if (savedName) setUserName(savedName);
  }, []);

  useEffect(() => {
    if (!shareFeedback) return;
    const timer = setTimeout(() => setShareFeedback(''), 2200);
    return () => clearTimeout(timer);
  }, [shareFeedback]);

  useEffect(() => {
    if (!showSaveModal) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowSaveModal(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showSaveModal]);

  useEffect(() => {
    if (isQuietPath(pathParam)) {
      router.replace('/quiet');
      return;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    abortRef.current?.abort();
    abortRef.current = null;

    setIsSpeaking(false);
    setPrayer('');
    setError('');
    setHasSubmitted(false);
    setIsReflecting(false);
    setShowSaveModal(false);
    setSafetyNotice(null);

    const mappedTradition = mapPathToTradition(pathParam);
    const mappedCatalogKey = normalizeCatalogKey(pathParam);
    const requestedMode = normalizeMode(modeParam);

    const hasStructuredLauncher = Boolean(
      mappedCatalogKey && mappedCatalogKey !== 'grace'
    );

    const hasPrayerTypeSelection =
      Boolean(prayerTypeParam?.trim()) && hasStructuredLauncher;

    const protestantPrayerTypeLink =
      mappedCatalogKey === 'protestant' && Boolean(prayerTypeParam?.trim());

    const nextLauncherView: LauncherView = hasStructuredLauncher
      ? protestantPrayerTypeLink
        ? 'classic'
        : modeParam === 'classic'
          ? 'classic'
          : modeParam === 'free'
            ? 'free'
            : hasPrayerTypeSelection
              ? 'free'
              : 'quick'
      : 'free';

    const nextMode: PrayMode = hasStructuredLauncher
      ? nextLauncherView === 'classic'
        ? 'classic'
        : 'free'
      : requestedMode;

    if (pathParam) {
      setSelectedTradition(mappedTradition);
      setActiveCatalogKey(mappedCatalogKey);
      localStorage.setItem('pwg_tradition', mappedTradition);
    } else {
      const savedTradition = localStorage.getItem('pwg_tradition') as Tradition | null;

      if (savedTradition && AVATARS[savedTradition]) {
        setSelectedTradition(savedTradition);
        setActiveCatalogKey(normalizeCatalogKey(savedTradition));
      } else {
        setSelectedTradition('grace' as Tradition);
        setActiveCatalogKey('grace');
      }
    }

    setMode(nextMode);
    setLauncherView(nextLauncherView);

    if (nextMode === 'classic') {
      const initialClassicLabel =
        prayerLabelParam || (protestantPrayerTypeLink ? prayerTypeParam || '' : '');

      setSelectedPrayerLabel(initialClassicLabel);
      setSelectedPrayerKind(prayerLabelParam ? normalizePrayerKind(prayerKindParam) : 'type');
      setSelectedPrayerType('');
      setSelectedFeelings([]);
    } else {
      setSelectedPrayerLabel('');
      setSelectedPrayerKind('type');
      setSelectedPrayerType(
        mappedCatalogKey === 'protestant'
          ? PROTESTANT_PERSONAL_BASE
          : prayerTypeParam || ''
      );
      setSelectedFeelings([DEFAULT_FEELING]);
    }
  }, [
    pathParam,
    modeParam,
    prayerLabelParam,
    prayerKindParam,
    prayerTypeParam,
    router,
  ]);

  useEffect(() => {
    localStorage.setItem('pwg_tradition', selectedTradition);
  }, [selectedTradition]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const available = synth.getVoices() || [];
      setVoices(available);

      setSelectedVoiceURI((prev) => {
        if (prev && available.some((voice) => voice.voiceURI === prev)) {
          return prev;
        }

        const preferred =
          available.find((voice) => voice.name === 'Google UK English Male') ||
          available.find((voice) => voice.name === 'Google UK English Male (en-GB)') ||
          available.find((voice) => voice.lang === 'en-GB' && /male/i.test(voice.name)) ||
          available.find((voice) => voice.lang === 'en-GB') ||
          available.find((voice) => /^en(-|_)/i.test(voice.lang)) ||
          available[0];

        return preferred?.voiceURI || '';
      });
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;

    return () => {
      synth.cancel();
      synth.onvoiceschanged = null;
      setIsSpeaking(false);
    };
  }, []);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const currentAvatar =
    AVATARS[selectedTradition] ||
    AVATARS.catholic ||
    AVATARS.protestant ||
    AVATARS.jewish ||
    AVATARS.muslim ||
    AVATARS.hindu ||
    AVATARS.buddhist ||
    AVATARS.grace;

  const freePrayerOptions = useMemo(() => {
    return getFreePrayerOptions(activeCatalogKey);
  }, [activeCatalogKey]);

  const traditionalOptions = useMemo(() => {
    if (!activeCatalogKey) return [];
    return getPrayerOptions(activeCatalogKey);
  }, [activeCatalogKey]);

  const isStructuredPrayerPath =
    activeCatalogKey !== null && activeCatalogKey !== 'grace';
  const isProtestantPrayerPath = activeCatalogKey === 'protestant';
  const showClassicModeToggle = isStructuredPrayerPath;
  const isProtestantPersonalMode = mode === 'free' && isProtestantPrayerPath;
  const showExpandedPrayerPanel = !isStructuredPrayerPath || launcherView !== 'quick';

  const selectedTraditionalEntry = useMemo(() => {
    return (
      traditionalOptions.find(
        (item) =>
          item.label === selectedPrayerLabel && item.kind === selectedPrayerKind
      ) || null
    );
  }, [traditionalOptions, selectedPrayerLabel, selectedPrayerKind]);

  const selectedFreePrayerEntry = useMemo(() => {
    return freePrayerOptions.find((item) => item.label === selectedPrayerType) || null;
  }, [freePrayerOptions, selectedPrayerType]);

  const liveSafetyNotice = useMemo(() => {
    if (mode !== 'free') return null;
    if (!input.trim()) return null;

    return detectPrayerSafety([input]).safetyNotice || null;
  }, [mode, input]);

  const prayerRequestLength = input.length;
  const prayerRequestRemaining = PRAYER_REQUEST_MAX - prayerRequestLength;
  const prayerRequestNearLimit = prayerRequestRemaining <= 60;

  useEffect(() => {
    if (mode !== 'free') return;

    if (activeCatalogKey === 'protestant') {
      setSelectedPrayerType(PROTESTANT_PERSONAL_BASE);
      return;
    }

    const requestedPrayerType = prayerTypeParam?.trim() || '';

    if (
      requestedPrayerType &&
      freePrayerOptions.some((item) => item.label === requestedPrayerType)
    ) {
      setSelectedPrayerType(requestedPrayerType);
      return;
    }

    setSelectedPrayerType((prev) => {
      if (prev && freePrayerOptions.some((item) => item.label === prev)) {
        return prev;
      }

      return freePrayerOptions[0]?.label || '';
    });
  }, [mode, activeCatalogKey, freePrayerOptions, prayerTypeParam]);

  useEffect(() => {
    if (mode !== 'classic') return;
    if (traditionalOptions.length === 0) return;

    const exists = traditionalOptions.some(
      (item) =>
        item.label === selectedPrayerLabel && item.kind === selectedPrayerKind
    );

    if (!exists) {
      setSelectedPrayerLabel(traditionalOptions[0].label);
      setSelectedPrayerKind(traditionalOptions[0].kind);
    }
  }, [mode, traditionalOptions, selectedPrayerLabel, selectedPrayerKind]);

  function stopSpeaking() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }

  function stopGenerating() {
    abortRef.current?.abort();
    abortRef.current = null;
    setIsReflecting(false);
    setHasSubmitted(false);
  }

  function toggleFeeling(feeling: string) {
    setSelectedFeelings((prev) => {
      if (prev.includes(feeling)) {
        if (prev.length === 1) return prev;
        return prev.filter((item) => item !== feeling);
      }

      return [...prev, feeling];
    });
  }

  function scrollToCustomPrayerForm() {
    if (typeof window === 'undefined') return;
    const form = document.getElementById('custom-prayer-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function openCustomizePrayer() {
    stopSpeaking();
    stopGenerating();
    setPrayer('');
    setError('');
    setHasSubmitted(false);
    setShowSaveModal(false);
    setSafetyNotice(null);

    setMode('free');
    setLauncherView('free');
    setSelectedPrayerLabel('');
    setSelectedPrayerKind('type');
    setSelectedPrayerType(
      isProtestantPrayerPath
        ? PROTESTANT_PERSONAL_BASE
        : freePrayerOptions[0]?.label || ''
    );
    setSelectedFeelings((prev) => (prev.length > 0 ? prev : [DEFAULT_FEELING]));
  }

  function openClassicPrayer() {
    stopSpeaking();
    stopGenerating();
    setPrayer('');
    setError('');
    setHasSubmitted(false);
    setShowSaveModal(false);
    setSafetyNotice(null);

    setMode('classic');
    setLauncherView('classic');
    setSelectedFeelings([]);

    if (!selectedPrayerLabel) {
      const firstClassic =
        traditionalOptions.find((item) => item.kind === 'type') || traditionalOptions[0];

      if (firstClassic) {
        setSelectedPrayerLabel(firstClassic.label);
        setSelectedPrayerKind(firstClassic.kind);
      }
    }
  }

  const effectivePrayerForName = prayerForName.trim() || userName || '';

  async function requestPrayer(payload: PrayerRequestPayload) {
    stopSpeaking();
    setError('');
    setPrayer('');
    setShowSaveModal(false);
    setSafetyNotice(null);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setHasSubmitted(true);
    setIsReflecting(true);

    try {
      const res = await fetch('/api/pray', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      const data = (await res.json()) as PrayerResponse;

      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong while generating your prayer.');
      }

      setSafetyNotice(data.safetyNotice || null);
      setPrayer(data.prayer || '');
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setError('');
        return;
      }

      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong while generating your prayer.'
      );
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
      }

      setIsReflecting(false);

      setTimeout(() => {
        const output = document.getElementById('prayer-output');
        if (output) {
          output.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

  async function handleGeneratePrayer() {
    if (mode === 'classic' && !selectedPrayerLabel.trim()) {
      setError('Please choose a prayer type first.');
      return;
    }

    const timeContext = getLocalTimeContext();
    const effectiveFreePrayerType = isProtestantPrayerPath
      ? PROTESTANT_PERSONAL_BASE
      : selectedPrayerType || freePrayerOptions[0]?.label || 'General Prayer';
    const effectiveFeelings =
      selectedFeelings.length > 0 ? selectedFeelings : [DEFAULT_FEELING];

    const payload: PrayerRequestPayload =
      mode === 'classic'
        ? {
            tradition: selectedTradition,
            mode: 'classic',
            avatarLabel: currentAvatar?.label ?? 'Grace',
            userName: effectivePrayerForName || null,
            selectedPrayerLabel,
            selectedPrayerKind,
            intention: intention.trim(),
            ...timeContext,
          }
        : {
            tradition: selectedTradition,
            mode: 'free',
            avatarLabel: currentAvatar?.label ?? 'Grace',
            prayerType: effectiveFreePrayerType,
            userName: effectivePrayerForName || null,
            feelings: effectiveFeelings,
            input: input.trim(),
            ...timeContext,
          };

    await requestPrayer(payload);
  }

  async function handleQuickPrayer() {
    const timeContext = getLocalTimeContext();
    const quickFeelings =
      selectedFeelings.length > 0 ? selectedFeelings : [DEFAULT_FEELING];

    setLauncherView('quick');

    if (mode !== 'free') {
      setMode('free');
    }

    if (isProtestantPrayerPath) {
      setSelectedPrayerLabel('');
      setSelectedPrayerKind('type');
      setSelectedPrayerType(PROTESTANT_PERSONAL_BASE);
    }

    const payload: PrayerRequestPayload = {
      tradition: selectedTradition,
      mode: 'free',
      avatarLabel: currentAvatar?.label ?? 'Grace',
      prayerType: isProtestantPrayerPath
        ? PROTESTANT_PERSONAL_BASE
        : selectedPrayerType || freePrayerOptions[0]?.label || 'General Prayer',
      userName: effectivePrayerForName || null,
      feelings: quickFeelings,
      input: input.trim(),
      ...timeContext,
    };

    await requestPrayer(payload);
  }

  function handleReset() {
    stopSpeaking();
    stopGenerating();
    setPrayer('');
    setError('');
    setHasSubmitted(false);
    setShowSaveModal(false);
    setSafetyNotice(null);

    if (mode === 'classic') {
      setIntention('');
    } else {
      setInput('');
      setSelectedFeelings([DEFAULT_FEELING]);
      setSelectedPrayerType(
        isProtestantPrayerPath
          ? PROTESTANT_PERSONAL_BASE
          : freePrayerOptions[0]?.label || ''
      );
    }
  }

  function handleAddIntentions() {
    stopSpeaking();
    stopGenerating();
    setPrayer('');
    setError('');
    setHasSubmitted(false);
    setShowSaveModal(false);
    setSafetyNotice(null);
  }

  function handleReadAloud() {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !prayer.trim()) {
      return;
    }

    if (isSpeaking) {
      stopSpeaking();
      return;
    }

    const synth = window.speechSynthesis;
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(prayer);
    utterance.volume = volume;
    utterance.rate = 1;
    utterance.pitch = 1;

    if (selectedVoiceURI) {
      const chosenVoice = voices.find((voice) => voice.voiceURI === selectedVoiceURI);
      if (chosenVoice) {
        utterance.voice = chosenVoice;
        utterance.lang = chosenVoice.lang;
      }
    }

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    synth.speak(utterance);
  }

  async function handleSharePrayer() {
    if (!prayer.trim()) return;

    const siteUrl =
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://praywithgod.ai';

    const shareTitle = effectivePrayerForName
      ? `Prayer for ${effectivePrayerForName}`
      : 'Prayer from PrayWithGod.ai';

    const shareText = [
      shareTitle,
      '',
      prayer,
      '',
      'Created with PrayWithGod.ai',
      siteUrl,
    ].join('\n');

    try {
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: siteUrl,
        });
        setShareFeedback('Prayer shared');
        return;
      }

      await navigator.clipboard.writeText(shareText);
      setShareFeedback('Prayer copied');
    } catch {
      try {
        await navigator.clipboard.writeText(shareText);
        setShareFeedback('Prayer copied');
      } catch {
        setShareFeedback('Unable to share');
      }
    }
  }

  function handlePrint() {
    if (typeof window === 'undefined' || !prayer.trim()) return;

    const title = escapeHtml(resultTitle);
    const subtitle = escapeHtml(resultSubtitle);
    const body = escapeHtml(prayer).replace(/\n/g, '<br />');
    const preparedMeta = escapeHtml(preparedMetaLine);
    const disclosure = escapeHtml(disclosureNote);

    const printHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>${title}</title>
          <style>
            html, body {
              margin: 0;
              padding: 0;
              background: #ffffff;
              color: #000000;
              font-family: Georgia, "Times New Roman", serif;
            }
            body {
              padding: 48px;
            }
            .wrap {
              max-width: 760px;
              margin: 0 auto;
            }
            .eyebrow {
              font-size: 12px;
              letter-spacing: 0.18em;
              text-transform: uppercase;
              color: #92400e;
              margin-bottom: 18px;
            }
            h1 {
              margin: 0 0 10px 0;
              font-size: 34px;
              line-height: 1.2;
              font-weight: 600;
              color: #000000;
            }
            .subtitle {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.18em;
              color: #000000;
              margin-bottom: 20px;
            }
            .prepared {
              font-size: 14px;
              color: #000000;
              margin-bottom: 24px;
            }
            .prayer {
              font-size: 22px;
              line-height: 1.9;
              font-style: italic;
              color: #000000;
            }
            .note {
              margin-top: 30px;
              padding: 16px 18px;
              border: 1px solid #e5e7eb;
              border-radius: 16px;
              background: #fafaf9;
              font-size: 14px;
              line-height: 1.7;
              color: #000000;
            }
            .note-title {
              display: block;
              margin-bottom: 6px;
              font-size: 11px;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              color: #92400e;
              font-weight: 700;
            }
            @media print {
              body {
                padding: 28px;
              }
            }
          </style>
        </head>
        <body>
          <div class="wrap">
            <div class="eyebrow">${isClassic ? 'Tradition-faithful rendition' : 'Prayer formed'}</div>
            <h1>${title}</h1>
            <div class="subtitle">${subtitle}</div>
            <div class="prepared">${preparedMeta}</div>
            <div class="prayer">${body}</div>
            <div class="note">
              <span class="note-title">About this prayer</span>
              ${disclosure}
            </div>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank', 'width=900,height=700');
    if (!printWindow) {
      setError('Print preview was blocked. Please allow pop-ups for this site and try again.');
      return;
    }

    printWindow.document.open();
    printWindow.document.write(printHtml);
    printWindow.document.close();

    const runPrint = () => {
      try {
        printWindow.focus();
        printWindow.print();
      } catch {
        setError('Unable to open print preview in this browser.');
      }
    };

    printWindow.onload = runPrint;
    setTimeout(runPrint, 350);
  }

  const isClassic = mode === 'classic';
  const isFocusedResult = Boolean(prayer) && !isReflecting && !error;

  const pathDisplayLabel =
    toDisplayLabel(activeCatalogKey || selectedTradition) || 'Prayer';

  const resultTitle = isClassic
    ? selectedTraditionalEntry?.display || selectedPrayerLabel || 'Prayer type'
    : isProtestantPersonalMode
      ? 'Personal Prayer'
      : selectedFreePrayerEntry?.display ||
        freePrayerOptions[0]?.display ||
        selectedPrayerType ||
        'Prayer';

  const resultSubtitle = pathDisplayLabel;

  const disclosureNote = getPrayerDisclosure(selectedTradition, isClassic);

  const preparedByName = userName?.trim() || 'User';
  const explicitRecipient = prayerForName.trim();
  const preparedRecipient =
    explicitRecipient && explicitRecipient !== preparedByName
      ? explicitRecipient
      : '';

  const preparedMetaLine = preparedRecipient
    ? `Prepared by ${preparedByName} for ${preparedRecipient}`
    : `Prepared by ${preparedByName}`;

  const requestSummary = isClassic ? intention.trim() : input.trim();
  const feelingsSummary = selectedFeelings.length
    ? selectedFeelings.join(', ')
    : 'Not provided';

  const savePathLabel = isClassic
    ? 'Prayer type'
    : isProtestantPersonalMode
      ? 'Prayer path'
      : 'Prayer type';

  const savePathValue = isClassic
    ? resultTitle
    : isProtestantPersonalMode
      ? 'Personal prayer'
      : resultTitle;

  const saveChecklistItems = [
    {
      label: 'Prayer text file',
      value: 'Current prayer output',
      checked: Boolean(prayer.trim()),
    },
    {
      label: 'Prepared by',
      value: preparedByName,
      checked: Boolean(preparedByName),
    },
    {
      label: 'Prayer recipient',
      value: preparedRecipient || 'Not provided',
      checked: Boolean(preparedRecipient),
    },
    {
      label: 'Tradition',
      value: pathDisplayLabel,
      checked: Boolean(pathDisplayLabel),
    },
    {
      label: savePathLabel,
      value: savePathValue,
      checked: Boolean(savePathValue),
    },
    {
      label: 'Prayer request',
      value: requestSummary || 'Not provided',
      checked: Boolean(requestSummary),
    },
    {
      label: 'Feelings',
      value: feelingsSummary,
      checked: selectedFeelings.length > 0,
    },
  ];

  const launcherButtonClass = (active: boolean) =>
    `rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70 ${
      active
        ? 'border border-sky-400 bg-sky-100 text-zinc-900 shadow-sm'
        : 'border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50'
    }`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>

          <div className="rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm text-zinc-900 shadow-sm backdrop-blur">
            {userName ? `Welcome back, ${userName}.` : 'A quiet place to pray.'}
          </div>
        </div>

        {isFocusedResult ? (
          <section id="prayer-output" className="mx-auto max-w-4xl">
            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8 lg:p-10">
              <div className="mb-8 flex flex-col items-center text-center">
                <div className="mb-8 flex justify-center">
                  <div className="overflow-visible rounded-full border border-amber-200 bg-gradient-to-b from-white via-amber-50/80 to-white p-8 shadow-[0_18px_45px_rgba(245,158,11,0.16)] ring-1 ring-white/80">
                    <div className="origin-center scale-[2.15] transform">
                      <GuideAvatar avatar={currentAvatar} />
                    </div>
                  </div>
                </div>

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-amber-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                    {isClassic ? 'Tradition-faithful rendition' : 'Prayer formed'}
                  </span>
                </div>

                <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                  {resultTitle}
                </h1>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-black">
                  {resultSubtitle}
                </p>

                <p className="mt-4 max-w-2xl text-sm text-black">
                  {preparedMetaLine}
                </p>

                <button
                  type="button"
                  onClick={handleReadAloud}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
                >
                  {isSpeaking ? (
                    <>
                      <Square className="h-4 w-4" />
                      Stop Reading
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Read Aloud
                    </>
                  )}
                </button>
              </div>

              {safetyNotice ? (
                <div className="mb-6">
                  <SafetyNoticeCard notice={safetyNotice} />
                </div>
              ) : null}

              <div className="rounded-[1.75rem] border border-amber-200 bg-gradient-to-b from-white via-amber-100/70 to-orange-200/70 px-6 py-8 shadow-sm sm:px-8 sm:py-10">
                <div className="whitespace-pre-wrap font-serif text-[1.08rem] italic leading-8 text-black sm:text-[1.12rem]">
                  {prayer}
                </div>
              </div>

              <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-white/80 bg-white/70 p-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowSaveModal(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-sky-200"
                  >
                    <Bookmark className="h-4 w-4" />
                    Save
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReadAloud}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
                  >
                    {isSpeaking ? (
                      <>
                        <Square className="h-4 w-4" />
                        Stop Reading
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        Read Aloud
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleAddIntentions}
                    className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-sky-200"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Add Intentions
                  </button>

                  <button
                    type="button"
                    onClick={handleSharePrayer}
                    className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-sky-200"
                  >
                    <Share2 className="h-4 w-4" />
                    Share this Prayer
                  </button>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-sky-200"
                  >
                    <Printer className="h-4 w-4" />
                    Print
                  </button>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Change tradition
                  </Link>
                </div>

                {shareFeedback ? (
                  <div className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-black">
                    {shareFeedback}
                  </div>
                ) : null}

                <div className="flex flex-col gap-4 rounded-2xl border border-sky-200 bg-sky-50/80 p-4 sm:flex-row sm:items-end sm:justify-center">
                  <div className="min-w-[220px]">
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-black">
                      Voice
                    </label>
                    <select
                      value={selectedVoiceURI}
                      onChange={(e) => setSelectedVoiceURI(e.target.value)}
                      className="w-full rounded-2xl border border-sky-300 bg-white px-4 py-3 text-sm font-medium text-zinc-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    >
                      {voices.length > 0 ? (
                        voices.map((voice) => (
                          <option key={voice.voiceURI} value={voice.voiceURI}>
                            {voice.name} ({voice.lang})
                          </option>
                        ))
                      ) : (
                        <option value="">Default browser voice</option>
                      )}
                    </select>
                  </div>

                  <div className="min-w-[240px]">
                    <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-black">
                      <Volume2 className="h-4 w-4" />
                      Volume
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="w-full accent-sky-500"
                      />
                      <span className="min-w-[2.5rem] text-sm font-medium text-black">
                        {volume.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.25rem] border border-amber-100 bg-white/75 px-5 py-4 text-left shadow-sm">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                    About this prayer
                  </div>
                  <p className="mt-2 text-sm leading-7 text-black">
                    {disclosureNote}
                  </p>
                </div>

                <div className="mt-2 flex justify-center">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Return Home
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-4xl">
            <section className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-8">
              <div className="mb-8 rounded-[1.75rem] border border-amber-100 bg-gradient-to-b from-white to-amber-50/70 p-5 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-amber-100 bg-white shadow-sm">
                      <GuideAvatar avatar={currentAvatar} />
                    </div>

                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                        Selected tradition
                      </div>
                      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-900">
                        {currentAvatar?.label || 'Grace'}
                      </h2>
                      <p className="mt-1 text-sm text-zinc-900">
                        {getGuideSubLabel(selectedTradition, currentAvatar)}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-zinc-900 shadow-sm sm:max-w-xs">
                    Tradition is locked on this page. Return home to choose another path.
                  </div>
                </div>

                {showClassicModeToggle ? (
                  <div className="mt-5 border-t border-amber-100 pt-5">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={handleQuickPrayer}
                          disabled={isReflecting}
                          className={launcherButtonClass(launcherView === 'quick')}
                        >
                          {isReflecting && launcherView === 'quick' ? (
                            <>
                              <RefreshCw className="mr-2 inline h-4 w-4 animate-spin" />
                              Reflecting...
                            </>
                          ) : (
                            <>
                              <Sparkles className="mr-2 inline h-4 w-4" />
                              Quick Prayer
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={openCustomizePrayer}
                          disabled={isReflecting}
                          className={launcherButtonClass(launcherView === 'free')}
                        >
                          Customize a Prayer
                        </button>

                        <button
                          type="button"
                          onClick={openClassicPrayer}
                          disabled={isReflecting}
                          className={launcherButtonClass(launcherView === 'classic')}
                        >
                          Prayer by Type
                        </button>
                      </div>

                      {launcherView === 'quick' ? (
                        <p className="text-sm text-zinc-900">
                          Quick Prayer generates immediately. Choose Customize or Prayer by Type to open more options.
                        </p>
                      ) : launcherView === 'free' ? (
                        <p className="text-sm text-zinc-900">
                          {isProtestantPrayerPath
                            ? 'Customize a Prayer opens the personal prayer form below.'
                            : 'Customize a Prayer opens the guided prayer form below.'}
                        </p>
                      ) : (
                        <p className="text-sm text-zinc-900">
                          Choose a {pathDisplayLabel} prayer type below. Use Read more → for the definition pages.
                        </p>
                      )}
                    </div>
                  </div>
                ) : !isClassic ? (
                  <div className="mt-5 border-t border-amber-100 pt-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        onClick={handleQuickPrayer}
                        disabled={isReflecting}
                        title="Generate a prayer now"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        {isReflecting ? (
                          <>
                            <RefreshCw className="h-4 w-4 animate-spin" />
                            Reflecting...
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-4 w-4" />
                            Quick Prayer
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={scrollToCustomPrayerForm}
                        className="text-left text-sm text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800"
                      >
                        Or scroll down to form a custom prayer.
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>

              {showExpandedPrayerPanel ? (
                <>
                  <div id="custom-prayer-form" className="mb-8 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
                        {isClassic
                          ? 'Prayer by Type'
                          : showClassicModeToggle
                            ? 'Customize a Prayer'
                            : 'What would you like prayer for?'}
                      </h1>
                      <p className="mt-2 max-w-2xl text-zinc-900">
                        {isClassic
                          ? 'Choose a prayer type, then add a personal intention if you want one woven into the tradition-shaped prayer.'
                          : isProtestantPersonalMode
                            ? 'Customize the recipient, your feelings, and your request here. Use Prayer by Type if you want a type-first shortcut.'
                            : showClassicModeToggle
                              ? 'Choose a prayer type, name the person, add your request, and describe how you feel. Use Prayer by Type if you want a type-first shortcut.'
                              : 'You can describe your situation, name the people involved, mention your hopes, or simply choose how you feel right now.'}
                      </p>
                    </div>
                  </div>

                  {userName ? (
                    <div className="mb-8 rounded-2xl border border-zinc-200 bg-white px-4 py-4 text-sm text-zinc-900">
                      Personal name{' '}
                      <span className="font-semibold text-zinc-900">{userName}</span>
                    </div>
                  ) : null}

                  <div className="mb-8">
                    <label
                      htmlFor="prayer-for-name"
                      className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900"
                    >
                      Who is this prayer for? (optional)
                    </label>

                    <input
                      id="prayer-for-name"
                      type="text"
                      value={prayerForName}
                      onChange={(e) => setPrayerForName(e.target.value)}
                      placeholder={
                        userName
                          ? `Leave blank to use your saved name, ${userName}.`
                          : 'Example: Mom, Michael, my family, or myself'
                      }
                      className="w-full rounded-3xl border border-zinc-200 bg-white px-5 py-4 text-base text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                    />

                    <p className="mt-2 text-sm text-zinc-900">
                      This does not change your saved name. It only applies to this prayer.
                    </p>
                  </div>

                  {isClassic ? (
                    <>
                      <div className="mb-8">
                        <div className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900">
                          Prayer types
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                          {traditionalOptions.map((item) => {
                            const active =
                              selectedPrayerLabel === item.label &&
                              selectedPrayerKind === item.kind;
                            const aboutHref = getPrayerTypeDefinitionHref(
                              activeCatalogKey || selectedTradition,
                              item.label
                            );

                            return (
                              <div
                                key={`${item.kind}-${item.label}`}
                                className={`rounded-2xl border px-4 py-4 transition ${
                                  active
                                    ? 'border-sky-400 bg-sky-100 shadow-sm'
                                    : 'border-zinc-200 bg-white hover:border-sky-300 hover:bg-sky-50'
                                }`}
                              >
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedPrayerLabel(item.label);
                                    setSelectedPrayerKind(item.kind);
                                  }}
                                  className="w-full text-left"
                                >
                                  <div className="font-medium text-zinc-900">{item.display}</div>
                                </button>

                                {aboutHref ? (
                                  <div className="mt-2">
                                    <Link
                                      href={aboutHref}
                                      className="text-sm font-semibold text-sky-700 transition hover:text-sky-800"
                                    >
                                      Read more →
                                    </Link>
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mb-8 rounded-[1.75rem] border border-sky-300 bg-gradient-to-b from-white to-sky-100 px-5 py-5 shadow-sm">
                        <div className="mb-2 flex items-center gap-2 text-sky-800">
                          <Bookmark className="h-4 w-4" />
                          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                            Selected prayer option
                          </span>
                        </div>
                        <div className="text-xl font-semibold text-zinc-900">
                          {selectedTraditionalEntry?.display || selectedPrayerLabel || 'Prayer type'}
                        </div>
                        {selectedPrayerKind === 'named' ? (
                          <div className="mt-2 text-sm text-zinc-900">Named prayer</div>
                        ) : null}
                      </div>

                      <div className="mb-8">
                        <label
                          htmlFor="intention-input"
                          className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900"
                        >
                          Personal intention (optional)
                        </label>
                        <textarea
                          id="intention-input"
                          value={intention}
                          onChange={(e) => setIntention(e.target.value)}
                          placeholder="Example: Please weave in peace for my family, wisdom for a difficult decision, and strength for the week ahead."
                          className="min-h-[160px] w-full rounded-3xl border border-zinc-200 bg-white px-5 py-4 text-base text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {isProtestantPersonalMode ? (
                        <div className="mb-8 rounded-[1.75rem] border border-sky-200 bg-sky-50/80 px-5 py-5 shadow-sm">
                          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-800">
                            Personal prayer path
                          </div>
                          <p className="mt-2 text-sm leading-7 text-zinc-900">
                            Protestant Customize mode uses a hidden petitionary base, so you can focus on the person, the feeling, and the prayer request instead of choosing a visible prayer type.
                          </p>
                        </div>
                      ) : (
                        <div className="mb-8">
                          <div className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900">
                            Prayer type
                          </div>
                          <div className="flex flex-wrap gap-4">
                            {freePrayerOptions.map((item) => {
                              const active = selectedPrayerType === item.label;
                              const aboutHref = getPrayerTypeDefinitionHref(
                                activeCatalogKey || selectedTradition,
                                item.label
                              );

                              return (
                                <div key={item.id} className="flex flex-col items-start gap-1">
                                  <button
                                    type="button"
                                    onClick={() => setSelectedPrayerType(item.label)}
                                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                                      active
                                        ? 'border-sky-400 bg-sky-100 text-zinc-900'
                                        : 'border-zinc-200 bg-white text-zinc-900 hover:border-sky-300 hover:bg-sky-50'
                                    }`}
                                  >
                                    {item.display}
                                  </button>

                                  {aboutHref ? (
                                    <Link
                                      href={aboutHref}
                                      className="pl-2 text-xs font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-800"
                                    >
                                      About this prayer type
                                    </Link>
                                  ) : null}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      <div className="mb-8">
                        <label
                          htmlFor="prayer-input"
                          className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900"
                        >
                          Your prayer request (optional)
                        </label>
                        <textarea
                          id="prayer-input"
                          value={input}
                          onChange={(e) => setInput(e.target.value.slice(0, PRAYER_REQUEST_MAX))}
                          maxLength={PRAYER_REQUEST_MAX}
                          aria-describedby="prayer-input-help prayer-input-counter prayer-input-safety"
                          placeholder="Example: Please pray for peace in my family, wisdom for a difficult decision, and strength for the week ahead. This field is optional."
                          className="min-h-[180px] w-full rounded-3xl border border-zinc-200 bg-white px-5 py-4 text-base text-zinc-900 outline-none transition placeholder:text-zinc-500 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                        />

                        <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <p
                            id="prayer-input-help"
                            className="text-sm text-zinc-900"
                          >
                            Keep it brief so the prayer stays focused and readable.
                          </p>

                          <div
                            id="prayer-input-counter"
                            className={`text-sm font-medium ${
                              prayerRequestNearLimit ? 'text-amber-700' : 'text-zinc-700'
                            }`}
                          >
                            {prayerRequestLength}/{PRAYER_REQUEST_MAX}
                          </div>
                        </div>

                        {liveSafetyNotice ? (
                          <div id="prayer-input-safety" className="mt-4" aria-live="polite">
                            <SafetyNoticeCard notice={liveSafetyNotice} />
                          </div>
                        ) : null}
                      </div>

                      <div className="mb-8">
                        <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-900">
                          <Heart className="h-4 w-4" />
                          How are you feeling?
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {FEELING_OPTIONS.map((feeling) => {
                            const active = selectedFeelings.includes(feeling);
                            return (
                              <button
                                key={feeling}
                                type="button"
                                onClick={() => toggleFeeling(feeling)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                                  active
                                    ? 'border-sky-400 bg-sky-100 text-zinc-900'
                                    : 'border-zinc-200 bg-white text-zinc-900 hover:border-sky-300 hover:bg-sky-50'
                                }`}
                              >
                                {feeling}
                              </button>
                            );
                          })}
                        </div>
                        <p className="mt-3 text-sm text-zinc-900">
                          One feeling is always kept selected so you can begin quickly.
                        </p>
                      </div>
                    </>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleGeneratePrayer}
                      disabled={isReflecting}
                      className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isReflecting ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          Reflecting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {isClassic ? 'Generate prayer by type' : 'Generate prayer'}
                        </>
                      )}
                    </button>

                    {isReflecting ? (
                      <button
                        type="button"
                        onClick={stopGenerating}
                        className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-6 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                      >
                        <XCircle className="h-4 w-4" />
                        Stop
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-100 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-sky-200"
                      >
                        Reset
                      </button>
                    )}

                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Change tradition
                    </Link>
                  </div>
                </>
              ) : null}

              {(error ||
                isReflecting ||
                safetyNotice ||
                (hasSubmitted && !prayer && !safetyNotice)) && (
                <div id="prayer-output" className="mt-10">
                  {error && (
                    <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
                      {error}
                    </div>
                  )}

                  {safetyNotice && !prayer && !isReflecting ? (
                    <SafetyNoticeCard notice={safetyNotice} />
                  ) : null}

                  {isReflecting && !error && (
                    <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-b from-amber-50 to-white px-6 py-8 shadow-sm">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-zinc-900">
                          <RefreshCw className="h-5 w-5 animate-spin text-amber-700" />
                          <span className="font-medium">
                            Holding your request in a quiet moment of reflection...
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={stopGenerating}
                          className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
                        >
                          <XCircle className="h-4 w-4" />
                          Stop
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </section>
          </section>
        )}
      </div>

      {showSaveModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/55 p-4"
          onClick={() => setShowSaveModal(false)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-100 px-6 py-5 sm:px-8">
              <div>
                <Link
                  href="/join"
                  className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  Become a Member!
                </Link>

                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-900">
                  Save this prayer
                </h2>

                <p className="mt-2 text-sm leading-6 text-black">
                  Member save tools are coming soon. When enabled, this prayer can be saved
                  along with the details below.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowSaveModal(false)}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                aria-label="Close save modal"
              >
                <X className="h-4 w-4" />
                Close
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 sm:px-8">
              <div className="space-y-3">
                {saveChecklistItems.map((item) => (
                  <label
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 opacity-60"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      readOnly
                      disabled
                      className="mt-1 h-4 w-4"
                    />
                    <div>
                      <div className="text-sm font-semibold text-black">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm text-black">
                        {item.value}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-zinc-100 px-6 py-4 sm:px-8">
              <button
                type="button"
                onClick={() => setShowSaveModal(false)}
                className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default function PrayPage() {
  return (
    <Suspense
      fallback={
        <main className="relative min-h-screen overflow-hidden bg-transparent text-zinc-900">
          <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
                Loading prayer page...
              </h1>
            </div>
          </div>
        </main>
      }
    >
      <PrayPageInner />
    </Suspense>
  );
}