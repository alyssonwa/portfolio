import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <main className={styles.footerContainer}>
      <div className={styles.conteudoFooter}>
        <p>Portfólio desenvolvido por</p>
        <p>Alysson Alves.</p>
        <p>&copy;2026</p>
      </div>
    </main>
  );
};
export default Footer;
