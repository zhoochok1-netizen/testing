import { NavigationData } from '@/lib/api';
import styles from './Header.module.css';
import HeaderClient from './HeaderClient';

interface HeaderProps {
  data: NavigationData;
}

// Server Component - renders static header with client interactivity
export default function Header({ data }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <HeaderClient
            logoLink={data.logo.link}
            logoText={data.logo.text}
            menuItems={data.menu}
          />
        </div>
      </div>
    </header>
  );
}
