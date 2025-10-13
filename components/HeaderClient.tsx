'use client';

import { useState } from 'react';
import styles from './Header.module.css';
import MobileMenu from './MobileMenu';

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

interface HeaderClientProps {
  logoLink: string;
  logoText: string;
  menuItems: MenuItem[];
}

export default function HeaderClient({
  logoLink,
  logoText,
  menuItems,
}: HeaderClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open menu"
      >
        <img src="/icons/menu.svg" alt="Menu" className={styles.menuIcon} />
      </button>

      <a href={logoLink} className={styles.logo}>
        <div className={styles.logoContainer}>
          <img src="/logo/Group.svg" alt="Logo" className={styles.logoIcon} />
        </div>
        {logoText}
      </a>

      {/* Desktop Navigation */}
      <nav className={styles.navLinks}>
        {menuItems.map((item, index) => (
          <a key={item.id} href={item.link} className={styles.navLink}>
            {index === 0 && <span className={styles.backArrow}>←</span>}
            {item.label}
          </a>
        ))}
      </nav>

      <button className={styles.userInfo}>
        <div className={styles.iconWrapper}>
          <img
            src="/icons/frame.svg"
            alt="Download"
            className={styles.socialIcon}
          />
        </div>
        <span className={styles.userName}>Download app</span>
        <div className={styles.arrowsContainer}>
          <img
            src="/icons/arrow-short-right.svg"
            alt="Arrow"
            className={`${styles.userArrows} ${styles.arrowLight}`}
          />
          <img
            src="/icons/arrow-short-right.svg"
            alt="Arrow"
            className={`${styles.userArrows} ${styles.arrowMedium}`}
          />
          <img
            src="/icons/arrow-short-right.svg"
            alt="Arrow"
            className={`${styles.userArrows} ${styles.arrowDark}`}
          />
        </div>
      </button>

      <MobileMenu
        menuItems={menuItems}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
