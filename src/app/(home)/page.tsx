import IntroImageSection from '@/components/IntroImageSection';
import IntroPortfolioSection from '@/components/IntroPortfolioSection';
import IntroSkillsSection from '@/components/IntroSkillsSection';
import { redirect } from 'next/navigation';

export default function Home() {
  /* 임시 */
  redirect('/blog');

  return (
    <main>
      <IntroImageSection />
      <IntroPortfolioSection />
      <IntroSkillsSection />
    </main>
  );
}
