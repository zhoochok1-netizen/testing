'use client';

import styles from './ReviewsSection.module.css';

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
  // Получаем первую букву имени для аватарки
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  // Генерируем цвет на основе имени для разнообразия
  const getAvatarColor = (name: string) => {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Purple
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Pink
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Blue
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // Green
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // Orange
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', // Teal
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', // Light
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)', // Rose
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div className={styles.reviewerInfo}>
          <div
            className={styles.reviewerPhotoPlaceholder}
            style={{ background: getAvatarColor(review.name) }}
          >
            {getInitial(review.name)}
          </div>
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
