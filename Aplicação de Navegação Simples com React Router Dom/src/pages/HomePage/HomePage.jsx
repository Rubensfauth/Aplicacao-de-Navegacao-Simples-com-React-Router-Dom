import React from "react";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Bem-vindo ao <span className={styles.highlight}>MeuSite</span>! 🎉
        </h1>
        <p className={styles.subtitle}>
          Uma aplicação React moderna com Vite e React Router
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⚡</span>
            <h3>Super Rápido</h3>
            <p>Powered by Vite</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🧭</span>
            <h3>Navegação Fluida</h3>
            <p>React Router Dom</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎨</span>
            <h3>Design Moderno</h3>
            <p>CSS Modules</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
