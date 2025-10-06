import styles from './Header.module.css';

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

interface NavigationData {
  logo: {
    text: string;
    link: string;
  };
  menu: MenuItem[];
}

interface HeaderProps {
  data: NavigationData | null;
}

export default function Header({ data }: HeaderProps) {
  // Fallback data if API fails
  const fallbackData: NavigationData = {
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

  const navigationData = data || fallbackData;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <a href={navigationData.logo.link} className={styles.logo}>
            <div className={styles.logoContainer}>
              <img
                src="/logo/Group.svg"
                alt="Logo"
                className={styles.logoIcon}
              />
            </div>
            {navigationData.logo.text}
          </a>
          <nav className={styles.navLinks}>
            {navigationData.menu.map((item, index) => (
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
            <span className={styles.userArrows}>&gt; &gt; &gt;</span>
          </button>
        </div>
      </div>
    </header>
  );
}
