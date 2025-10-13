import styles from './Footer.module.css';
import FooterClient from './FooterClient';

interface SocialData {
  vk: { enabled: boolean; url: string };
  telegram: { enabled: boolean; url: string };
  dzen: { enabled: boolean; url: string };
  vkVideo: { enabled: boolean; url: string };
}

interface FooterProps {
  socials: SocialData | null | undefined;
}

// Server Component - renders static footer with client interactivity
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
      <FooterClient socials={socialData} />
    </footer>
  );
}
