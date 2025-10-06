'use client';

import styles from './HeroSection.module.css';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  return (
    <div className={styles.videoModal} onClick={onClose}>
      <div
        className={styles.videoContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
        <video className={styles.modalVideo} controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl} type="video/webm" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
  );
}
