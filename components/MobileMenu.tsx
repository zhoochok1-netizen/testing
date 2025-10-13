'use client';

import { useState } from 'react';
import styles from './MobileMenu.module.css';

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  menuItems,
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.menuContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.menuHeader}>
          <span className={styles.menuTitle}>Menu</span>
          <span className={styles.pageIndicator}>1/1</span>
        </div>
        <nav className={styles.menu}>
          {menuItems.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              className={`${styles.menuItem} ${
                index === 0 ? styles.activeItem : ''
              }`}
              onClick={onClose}
            >
              {index === 0 && <span className={styles.backArrow}>←</span>}
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
