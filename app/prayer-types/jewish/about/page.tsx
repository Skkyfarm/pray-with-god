import { notFound } from 'next/navigation';
import TraditionAboutPage from '@/components/TraditionAboutPage';
import { getTraditionAboutEntry } from '@/lib/traditionAbout';

export const metadata = {
  title: 'About Jewish Prayer | PrayWithGod.ai',
  description:
    'A respectful introduction to Jewish prayer and reflection on PrayWithGod.ai.',
};

export default function Page() {
  const entry = getTraditionAboutEntry('jewish');

  if (!entry) {
    notFound();
  }

  return <TraditionAboutPage entry={entry} />;
}
