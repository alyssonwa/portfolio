import React from 'react';
import styles from './Projetos.module.css';
import MockupCel from '../mockups/celular';

const Projetos = () => {
  return (
    <main className={styles.projetosContainer}>
      <h1>Projetos</h1>
      <section>
        <div className={styles.projetoImagem}>
          aha
          <MockupCel />
        </div>
        <div className={styles.projetoDescricao}>uhu</div>
      </section>
      <section>
        <div className={styles.projetoImagem}>
          aha
          <MockupCel />
        </div>
        <div className={styles.projetoDescricao}>uhu</div>
      </section>
    </main>
  );
};
export default Projetos;
