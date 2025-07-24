import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <img src="/imgi_1_avataaars.svg" alt="logo" className={styles.logo} />
      <h1 className={styles.title}>START FRAMEWORK</h1>
      <p className={styles.subtitle}>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}