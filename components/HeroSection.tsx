import { MainData, ReviewsData } from '@/lib/api';
import styles from './HeroSection.module.css';
import HeroSectionClient from './HeroSectionClient';

interface HeroSectionProps {
  data: MainData;
  reviewsData: ReviewsData;
}

// Server Component - renders hero section wrapper with client interactivity
export default function HeroSection({ data, reviewsData }: HeroSectionProps) {
  return (
    <section id="main" className={styles.heroSection}>
      <HeroSectionClient mainData={data} reviewsData={reviewsData} />
    </section>
  );
}
