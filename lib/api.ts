// Server-side API functions for SSR
const API_BASE_URL = 'https://revmo-api.netlify.app';

export interface MainData {
  title: string;
  subtitle: string;
  videoUrl: string;
  buttons: {
    ios: { enabled: boolean; label: string };
    android: { enabled: boolean; label: string };
    apk: { enabled: boolean; label: string };
  };
  sidebar: {
    download_app: { enabled: boolean; label: string };
    watch_video: { enabled: boolean; label: string; url: string };
    qr_code: { enabled: boolean; label: string; url: string };
  };
  socials: {
    vk: { enabled: boolean; url: string };
    telegram: { enabled: boolean; url: string };
    dzen: { enabled: boolean; url: string };
    vkVideo: { enabled: boolean; url: string };
  };
}

export interface NavigationData {
  logo: {
    text: string;
    link: string;
  };
  menu: Array<{
    id: number;
    label: string;
    link: string;
  }>;
}

export interface ReviewsData {
  enabled: boolean;
  title: string;
  description: string;
  count: number;
  data: Array<{
    id: number;
    photo: string;
    name: string;
    date: string;
    text: string;
  }>;
}

// Fallback data in case API is unavailable
const fallbackMainData: MainData = {
  title: 'Ваш помощник',
  subtitle: 'в борьбе с ревматическими заболеваниями',
  videoUrl: '/video/Block-1-hero_1080p (1).mp4',
  buttons: {
    ios: { enabled: true, label: 'Скачать для IOS' },
    android: { enabled: true, label: 'Скачать для Android' },
    apk: { enabled: true, label: 'Скачать АРК' },
  },
  sidebar: {
    download_app: { enabled: true, label: 'Скачать приложение' },
    watch_video: {
      enabled: true,
      label: 'Смотреть видео о приложении',
      url: '/video/Block-1-hero_1080p (1).mp4',
    },
    qr_code: {
      enabled: true,
      label: 'Скачать\nпо QR коду',
      url: '/QR/Rectangle.png',
    },
  },
  socials: {
    vk: { enabled: true, url: 'https://vk.com/example' },
    telegram: { enabled: true, url: 'https://t.me/example' },
    dzen: { enabled: true, url: 'https://dzen.ru/example' },
    vkVideo: { enabled: true, url: 'https://vk.com/video/example' },
  },
};

const fallbackNavigationData: NavigationData = {
  logo: {
    text: 'Revmo.info app',
    link: '/',
  },
  menu: [
    { id: 1, label: 'Назад к сайту', link: '/' },
    { id: 2, label: 'О приложении', link: '/' },
    { id: 3, label: 'Возможности', link: '/' },
    { id: 4, label: 'Общение', link: '/' },
    { id: 5, label: 'Отзывы', link: '#reviews' },
  ],
};

const fallbackReviewsData: ReviewsData = {
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

export async function getMainData(): Promise<MainData> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/main`, {
      next: { revalidate: 3600 }, // Revalidate every hour
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.warn('Failed to fetch main data, using fallback');
      return fallbackMainData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('API unavailable (SSL/network issue), using fallback data');
    return fallbackMainData;
  }
}

export async function getNavigationData(): Promise<NavigationData> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/navigation`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.warn('Failed to fetch navigation data, using fallback');
      return fallbackNavigationData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('API unavailable (SSL/network issue), using fallback data');
    return fallbackNavigationData;
  }
}

export async function getReviewsData(): Promise<ReviewsData> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/slider`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.warn('Failed to fetch reviews data, using fallback');
      return fallbackReviewsData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('API unavailable (SSL/network issue), using fallback data');
    return fallbackReviewsData;
  }
}

export async function getAllData() {
  const [mainData, navigationData, reviewsData] = await Promise.all([
    getMainData(),
    getNavigationData(),
    getReviewsData(),
  ]);

  return {
    mainData,
    navigationData,
    reviewsData,
  };
}
