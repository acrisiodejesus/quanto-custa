import Head from 'next/head';
import { Menu } from '../components/Menu';
import styles from '../styles/pages/Home.module.css';

export default function Home() {

  return (
    <div className={styles.globalContainer}>
      <Menu />

      <div className={styles.contentContainer}>
        <div className={styles.texts}>
          <h1 className={styles.title}>Saiba quanto custa, a solução que você precisa!</h1>
          <p>O #QuantoCusta é um agregador de preços de soluções personalisadas (serviços), de acordo com as suas necessidades.</p>

          <div className={styles.buttons}>
            <button><a href="#">Começar</a></button>
            <a href="#">Como funciona?</a>
          </div>
        </div>
        <div className={styles.image}>
          <img src="decide.svg" alt="Saiba Quanto custa o serviço que você precisa!" />
        </div>
      </div>
    </div>
  )
}
