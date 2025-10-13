import { getAllData } from '@/lib/api';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

// Server Component - data is fetched on the server
export default async function Home() {
  const { mainData, navigationData, reviewsData } = await getAllData();

  return (
    <main className={styles.main}>
      <Header data={navigationData} />
      <HeroSection data={mainData} reviewsData={reviewsData} />
      <div className="desktop-only">
        <ReviewsSection data={reviewsData} />
      </div>
      <Footer socials={mainData?.socials} />
    </main>
  );
}
