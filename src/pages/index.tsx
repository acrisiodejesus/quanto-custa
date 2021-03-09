import Head from 'next/head';
import { Menu } from '../components/Menu';
import styles from '../styles/pages/Home.module.css';

export default function Home() {

  return (
    <div>
      <Menu />

      <div><h1 className={styles.title}>Quanto Custa Moçambique</h1></div>
    </div>
  )
}
