'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ReviewsSection from './ReviewsSection';
import Footer from './Footer';

interface ApiData {
  mainData: any;
  navigationData: any;
  reviewsData: any;
}

export default function DataLoader() {
  const [data, setData] = useState<ApiData>({
    mainData: null,
    navigationData: null,
    reviewsData: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const [mainRes, navigationRes, reviewsRes] = await Promise.all([
          fetch('https://revmo-api.netlify.app/api/main', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          }),
          fetch('https://revmo-api.netlify.app/api/navigation', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          }),
          fetch('https://revmo-api.netlify.app/api/slider', {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          }),
        ]);

        if (!mainRes.ok || !navigationRes.ok || !reviewsRes.ok) {
          throw new Error('One or more API calls failed');
        }

        const [mainData, navigationData, reviewsData] = await Promise.all([
          mainRes.json(),
          navigationRes.json(),
          reviewsRes.json(),
        ]);

        setData({ mainData, navigationData, reviewsData });
      } catch (error) {
        // Use fallback data instead of showing error
        const fallbackData = {
          mainData: {
            title: 'Ваш помощник',
            subtitle: 'в борьбе с ревматическими заболеваниями',
            videoUrl:
              'https://bcdless-s3-api.biocad.ru/shared/revmo/landing/video/Block-1-hero/1080p/Block-1-hero_1080p.webm',
            buttons: {
              ios: { enabled: true, label: 'Скачать для iOS' },
              android: { enabled: true, label: 'Скачать для Android' },
              apk: { enabled: true, label: 'Скачать APK' },
            },
            socials: {
              vk: { enabled: true, url: 'https://vk.com/example' },
              telegram: { enabled: true, url: 'https://t.me/example' },
              dzen: { enabled: true, url: 'https://dzen.ru/example' },
              vkVideo: { enabled: true, url: 'https://vk.com/video/example' },
            },
          },
          navigationData: {
            logo: { text: 'Revmo.info app', link: '/' },
            menu: [
              { id: 1, label: 'Назад к сайту', link: '/' },
              { id: 2, label: 'О приложении', link: '/' },
              { id: 3, label: 'Возможности', link: '/' },
              { id: 4, label: 'Общение', link: '/' },
              { id: 5, label: 'Отзывы', link: '/' },
            ],
          },
          reviewsData: {
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
          },
        };

        setData(fallbackData);
        setError(null); // Clear error since we're using fallback
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div>🔄 Загрузка данных...</div>
        <div style={{ fontSize: '14px', color: '#666' }}>
          Подключение к API...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <div>❌ Ошибка загрузки данных</div>
        <div style={{ fontSize: '14px', color: '#666' }}>{error}</div>
        <button
          onClick={() => window.location.reload()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  return (
    <>
      <Header data={data.navigationData} />
      <HeroSection data={data.mainData} />
      <ReviewsSection data={data.reviewsData} />
      <Footer socials={data.mainData?.socials} />
    </>
  );
}
