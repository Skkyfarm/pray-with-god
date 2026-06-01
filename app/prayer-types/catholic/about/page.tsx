import { notFound } from 'next/navigation';
import TraditionAboutPage from '@/components/TraditionAboutPage';
import { getTraditionAboutEntry } from '@/lib/traditionAbout';

export const metadata = {
  title: 'About Catholic Prayer | PrayWithGod.ai',
  description:
    'A respectful introduction to Catholic prayer and reflection on PrayWithGod.ai.',
};

export default function Page() {
  const entry = getTraditionAboutEntry('catholic');

  if (!entry) {
    notFound();
  }

  return <TraditionAboutPage entry={entry} />;
}
