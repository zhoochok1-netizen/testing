'use client';

import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import VideoCardButton from './VideoCardButton';
import ReviewsSection from './ReviewsSection';
import { MainData, ReviewsData } from '@/lib/api';

interface HeroSectionClientProps {
  mainData: MainData;
  reviewsData: ReviewsData;
}

export default function HeroSectionClient({
  mainData,
  reviewsData,
}: HeroSectionClientProps) {
  const [mobileStep, setMobileStep] = useState(0); // 0: initial, 1: video expanded, 2: video button only
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle swipe functionality - up for next, down for previous
  const handleSwipeUp = () => {
    if (isMobile && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setMobileStep((prev) => Math.min(prev + 1, 2)); // 0, 1, 2
        setIsTransitioning(false);
      }, 200);
    }
  };

  const handleSwipeDown = () => {
    if (isMobile && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setMobileStep((prev) => Math.max(prev - 1, 0)); // 2, 1, 0
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <div
      className={styles.content}
      onTouchStart={(e) => {
        const touchStart = e.touches[0].clientY;
        const handleTouchEnd = (e: TouchEvent) => {
          const touchEnd = e.changedTouches[0].clientY;
          const diff = touchStart - touchEnd;
          if (Math.abs(diff) > 50) {
            if (diff > 0) {
              handleSwipeUp();
            } else {
              handleSwipeDown();
            }
          }
          document.removeEventListener('touchend', handleTouchEnd);
        };
        document.addEventListener('touchend', handleTouchEnd);
      }}
    >
      {!isMobile || mobileStep === 0 ? (
        <>
          <div
            className={`${styles.leftColumn} ${
              isMobile && mobileStep === 0 ? styles.fadeIn : ''
            } ${isMobile && mobileStep > 0 ? styles.fadeOut : ''}`}
          >
            <div className={styles.leftColumnContent}>
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
            </div>
            <div className={styles.buttonsContainer}>
              {mainData.buttons.ios.enabled && (
                <button className={styles.downloadButton}>
                  <img
                    src="/icons/apple.svg"
                    alt="iOS"
                    className={styles.buttonIcon}
                  />
                  <img
                    src="/icons/frame.svg"
                    alt="iOS"
                    className={styles.buttonIconHover}
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
                  <img
                    src="/icons/frame.svg"
                    alt="Android"
                    className={styles.buttonIconHover}
                  />
                  {mainData.buttons.android.label}
                </button>
              )}
            </div>
          </div>

          <div
            className={`${styles.centerColumn} ${
              isMobile && mobileStep === 0 ? styles.mobileVideoPreview : ''
            }`}
          >
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
          {!isMobile && (
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
          )}
        </>
      ) : null}
      {isMobile && mobileStep === 1 && (
        <div className={styles.mobileVideoWithButton}>
          <div className={styles.mobileVideoContainer}>
            <video
              className={styles.mobileFullscreenVideo}
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
          {mainData.sidebar.watch_video.enabled && (
            <div className={styles.mobileVideoButtonContainer}>
              <VideoCardButton
                label={mainData.sidebar.watch_video.label}
                videoUrl={mainData.sidebar.watch_video.url}
              />
            </div>
          )}
        </div>
      )}
      {isMobile && mobileStep === 2 && (
        <div className={styles.mobileReviewsOnly}>
          <ReviewsSection data={reviewsData} />
        </div>
      )}
    </div>
  );
}
