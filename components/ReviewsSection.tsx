import { ReviewsData } from '@/lib/api';
import styles from './ReviewsSection.module.css';
import ReviewCard from './ReviewCard';

interface ReviewsSectionProps {
  data: ReviewsData;
}

// Server Component - renders reviews section with client review cards
export default function ReviewsSection({ data }: ReviewsSectionProps) {
  if (!data.data || data.data.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>{data.description}</p>
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.cardsWrapper}>
            {data.data.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
