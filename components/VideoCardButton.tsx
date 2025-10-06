'use client';

import { useState } from 'react';
import styles from './HeroSection.module.css';
import VideoModal from './VideoModal';

interface VideoCardButtonProps {
  label: string;
  videoUrl: string;
}

export default function VideoCardButton({
  label,
  videoUrl,
}: VideoCardButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={styles.sidebarCard}
        onClick={() => setIsModalOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <div className={styles.cardIcon}>
          <img
            src="/icons/video-square.svg"
            alt="Video"
            className={styles.videoIcon}
          />
        </div>
        <span className={styles.cardText}>{label}</span>
      </div>

      {isModalOpen && (
        <VideoModal videoUrl={videoUrl} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
