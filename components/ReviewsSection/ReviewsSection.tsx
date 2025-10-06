import styles from './ReviewsSection.module.css';
import ReviewCard from '../ReviewCard/ReviewCard';

interface Review {
  id: number;
  photo: string;
  name: string;
  date: string;
  text: string;
}

interface ReviewsData {
  enabled: boolean;
  title: string;
  description: string;
  count: number;
  data: Review[];
}

interface ReviewsSectionProps {
  data: ReviewsData | null;
}

export default function ReviewsSection({ data }: ReviewsSectionProps) {
  // Fallback data
  const fallbackData: ReviewsData = {
    enabled: true,
    title: 'Отзывы от врачей и пациентов',
    description: 'на приложение revmo.info app',
    count: 5,
    data: [
      {
        id: 1,
        photo: '',
        name: 'Екатерина',
        date: '28.09.2025',
        text: 'Приложение очень удобное! Помогает быстро найти нужную информацию о лекарствах и их взаимодействии. Рекомендую всем врачам! ❤️',
      },
      {
        id: 2,
        photo: '',
        name: 'Александр',
        date: '4.10.2025',
        text: 'Отличное приложение для медицинских работников. База данных обширная, интерфейс интуитивный. Экономит много времени в работе.',
      },
      {
        id: 3,
        photo: '',
        name: 'Светлана',
        date: '1.11.2025',
        text: 'Пользуюсь уже несколько месяцев. Очень довольна функционалом и актуальностью информации. Постоянно обновляется.',
      },
      {
        id: 4,
        photo: '',
        name: 'Евгений',
        date: '12.11.2025',
        text: 'Как врач с большим стажем, могу сказать, что это одно из лучших медицинских приложений. Очень помогает в практике.',
      },
      {
        id: 5,
        photo: '',
        name: 'Анна',
        date: '15.11.2025',
        text: 'Приложение стало незаменимым помощником в моей работе. Информация всегда актуальная, поиск быстрый и точный.',
      },
    ],
  };

  const reviewsData = data || fallbackData;

  if (!reviewsData.data || reviewsData.data.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{reviewsData.title}</h2>
          <p className={styles.subtitle}>{reviewsData.description}</p>
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.cardsWrapper}>
            {reviewsData.data.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
