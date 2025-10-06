import styles from './HeroSection.module.css';
import VideoCardButton from './VideoCardButton';

interface MainData {
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

interface HeroSectionProps {
  data: MainData | null;
}

export default function HeroSection({ data }: HeroSectionProps) {
  // Fallback data
  const fallbackData: MainData = {
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
        label: 'смотреть видео о приложении',
        url: '/video/Block-1-hero_1080p (1).mp4',
      },
      qr_code: {
        enabled: true,
        label: 'Скачать по QR коду',
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

  const mainData = data || fallbackData;

  return (
    <section id="main" className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          {mainData.buttons.apk.enabled && (
            <a href="#" className={styles.apkLink}>
              <img
                src="/icons/frame.svg"
                alt="Download"
                className={styles.apkIcon}
              />
              {mainData.buttons.apk.label}
            </a>
          )}
          <h1 className={styles.title}>{mainData.title}</h1>
          <h2 className={styles.subtitle}>{mainData.subtitle}</h2>
          <div className={styles.buttonsContainer}>
            {mainData.buttons.ios.enabled && (
              <button className={styles.downloadButton}>
                <img
                  src="/icons/apple.svg"
                  alt="iOS"
                  className={styles.buttonIcon}
                />
                {mainData.buttons.ios.label}
              </button>
            )}
            {mainData.buttons.android.enabled && (
              <button className={styles.downloadButton}>
                <img
                  src="/icons/google.svg"
                  alt="Android"
                  className={styles.buttonIcon}
                />
                {mainData.buttons.android.label}
              </button>
            )}
          </div>
        </div>

        <div className={styles.centerColumn}>
          <div className={styles.videoWrapper}>
            <video
              className={styles.backgroundVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src={mainData.videoUrl} type="video/mp4" />
              Ваш браузер не поддерживает видео элемент.
            </video>
          </div>
        </div>

        <div className={styles.rightColumn}>
          {mainData.sidebar.watch_video.enabled && (
            <VideoCardButton
              label={mainData.sidebar.watch_video.label}
              videoUrl={mainData.sidebar.watch_video.url}
            />
          )}
          {mainData.sidebar.qr_code.enabled && (
            <div className={styles.sidebarCard}>
              <div className={styles.cardIcon}>
                <img
                  src="/icons/scan-barcode.svg"
                  alt="QR Code"
                  className={styles.scanIcon}
                />
              </div>
              <span className={styles.cardText}>
                {mainData.sidebar.qr_code.label}
              </span>
              <div className={styles.qrCode}>
                <img src={mainData.sidebar.qr_code.url} alt="QR Code" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
