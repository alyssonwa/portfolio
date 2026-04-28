import React from 'react';
import styles from './Projetos.module.css';
import MockupCel from '../mockups/celular';
import PrintSonhario from './CapasProjetos/sonhario/sonhario.png';

const Projetos = () => {
  return (
    <main className={styles.projetosContainer}>
      <h1>Projetos</h1>
      <section>
        <div className={styles.projetoImagem}>
          <div className={styles.celularMockup}>
            <MockupCel className={styles.mockupSvg} />
            <img src={PrintSonhario} alt="print oxe" className={styles.print} />
          </div>
        </div>
        <div className={styles.projetoDescricao}>
          <h1>Sonhario</h1>
          <p>Aplicativo diário de hábitos de sono</p>
          <button>Saiba mais...</button>
        </div>
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
