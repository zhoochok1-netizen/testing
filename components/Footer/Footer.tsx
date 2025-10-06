import styles from './Footer.module.css';

interface SocialData {
  vk: { enabled: boolean; url: string };
  telegram: { enabled: boolean; url: string };
  dzen: { enabled: boolean; url: string };
  vkVideo: { enabled: boolean; url: string };
}

interface FooterProps {
  socials: SocialData | null | undefined;
}

export default function Footer({ socials }: FooterProps) {
  // Fallback data if API fails
  const fallbackSocials: SocialData = {
    vk: { enabled: true, url: 'https://vk.com/example' },
    telegram: { enabled: true, url: 'https://t.me/example' },
    dzen: { enabled: true, url: 'https://dzen.ru/example' },
    vkVideo: { enabled: true, url: 'https://vk.com/video/example' },
  };

  const socialData = socials || fallbackSocials;

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIconContainer}>
            <img src="/logo/Group.svg" alt="Logo" className={styles.logoIcon} />
          </div>
          <span className={styles.logo}>Revmo.info app</span>
        </div>
        <div className={styles.socials}>
          {socialData.vk.enabled && (
            <a
              href={socialData.vk.url}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              title="VK"
            >
              <img
                src="/icons/icon-vk.svg"
                alt="VK"
                className={styles.socialIcon}
              />
            </a>
          )}
          {socialData.telegram.enabled && (
            <a
              href={socialData.telegram.url}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <img
                src="/icons/icon-tg.svg"
                alt="Telegram"
                className={styles.socialIcon}
              />
            </a>
          )}
          {socialData.dzen.enabled && (
            <a
              href={socialData.dzen.url}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Дзен"
            >
              <img
                src="/icons/icon-zen.svg"
                alt="Дзен"
                className={styles.socialIcon}
              />
            </a>
          )}
          {socialData.vkVideo.enabled && (
            <a
              href={socialData.vkVideo.url}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <img
                src="/icons/youtube.svg"
                alt="YouTube"
                className={styles.socialIcon}
              />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
