'use client';

import { useState } from 'react';
import styles from '../ReviewsSection/ReviewsSection.module.css';

interface Review {
  id: number;
  photo: string;
  name: string;
  date: string;
  text: string;
}

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewerInfo}>
          {review.photo && !imageError ? (
            <img
              src={review.photo}
              alt={review.name}
              className={styles.reviewerPhoto}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.reviewerPhotoPlaceholder}></div>
          )}
          <span className={styles.reviewerName}>{review.name}</span>
        </div>
        <div className={styles.reviewDateContainer}>
          <span className={styles.reviewDate}>{review.date}</span>
          <img
            src="/icons/calendar.svg"
            alt="Calendar"
            className={styles.calendarIcon}
          />
        </div>
      </div>
      <div className={styles.reviewTextContainer}>
        <p className={styles.reviewText}>{review.text}</p>
      </div>
    </div>
  );
}
