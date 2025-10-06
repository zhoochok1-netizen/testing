import DataLoader from '@/components/DataLoader';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <DataLoader />
    </main>
  );
}
