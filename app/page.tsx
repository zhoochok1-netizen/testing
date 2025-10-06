import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import ReviewsSection from '@/components/ReviewsSection/ReviewsSection';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

// Fetch data on server
async function getMainData() {
  try {
    const res = await fetch('https://revmo-api.netlify.app/api/main', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch main data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching main data:', error);
    return null;
  }
}

async function getNavigationData() {
  try {
    const res = await fetch('https://revmo-api.netlify.app/api/navigation', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch navigation data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching navigation data:', error);
    return null;
  }
}

async function getReviewsData() {
  try {
    const res = await fetch('https://revmo-api.netlify.app/api/slider', {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch reviews data');
    return await res.json();
  } catch (error) {
    console.error('Error fetching reviews data:', error);
    return null;
  }
}

export default async function Home() {
  const [mainData, navigationData, reviewsData] = await Promise.all([
    getMainData(),
    getNavigationData(),
    getReviewsData(),
  ]);

  return (
    <main className={styles.main}>
      <Header data={navigationData} />
      <HeroSection data={mainData} />
      <ReviewsSection data={reviewsData} />
      <Footer socials={mainData?.socials} />
    </main>
  );
}
