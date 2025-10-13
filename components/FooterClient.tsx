'use client';

import { useState } from 'react';
import styles from './Footer.module.css';

interface SocialData {
  vk: { enabled: boolean; url: string };
  telegram: { enabled: boolean; url: string };
  dzen: { enabled: boolean; url: string };
  vkVideo: { enabled: boolean; url: string };
}

interface FooterClientProps {
  socials: SocialData;
}

export default function FooterClient({ socials }: FooterClientProps) {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className={styles.content}>
      <button
        className={`${styles.contactButton} ${isToggled ? styles.toggled : ''}`}
        onClick={() => setIsToggled(!isToggled)}
      >
        <div className={styles.iconCircle}>
          <div className={styles.locationIcon}></div>
        </div>
        <div className={styles.textWrapper}>
          <span className={styles.contactText}>Contacts</span>
          <div className={styles.arrows}>
            <img
              src="/icons/arrow-short-right.svg"
              alt="Arrow"
              className={`${styles.arrow} ${styles.arrowLight}`}
            />
            <img
              src="/icons/arrow-short-right.svg"
              alt="Arrow"
              className={`${styles.arrow} ${styles.arrowMedium}`}
            />
            <img
              src="/icons/arrow-short-right.svg"
              alt="Arrow"
              className={`${styles.arrow} ${styles.arrowDark}`}
            />
          </div>
        </div>
      </button>
      <div className={styles.socials}>
        {socials.vk.enabled && (
          <a
            href={socials.vk.url}
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
        {socials.telegram.enabled && (
          <a
            href={socials.telegram.url}
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
        {socials.dzen.enabled && (
          <a
            href={socials.dzen.url}
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
        {socials.vkVideo.enabled && (
          <a
            href={socials.vkVideo.url}
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
  );
}
