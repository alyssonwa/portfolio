import React from 'react';
import styles from './Projetos.module.css';
import CelMockup from '../mockups/celular';
import PcMockup from '../mockups/pc';
import PrintSonhario from './CapasProjetos/sonhario/sonhario.png';

const Projetos = () => {
  return (
    <main className={styles.projetosContainer}>
      <h1>Meus Projetos</h1>
      <section>
        <div className={styles.projetoImagem}>
          <div className={styles.celularMockup}>
            <CelMockup className={styles.mockupSvg} />
            <img
              src={PrintSonhario}
              alt="Tela inicial Sonhario"
              className={styles.print}
            />
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
          <div className={styles.celularMockup}>
            <CelMockup className={styles.mockupSvg} />
            {/* <img
              src={PrintSonhario}
              alt="Tela inicial Sonhario"
              className={styles.print}
            /> */}
          </div>
        </div>
        <div className={styles.projetoDescricao}>
          <h1>Tavern Talk</h1>
          <p>Aplicativo web gerador de fichas de RPG</p>
          <button>Saiba mais...</button>
        </div>
      </section>
    </main>
  );
};
export default Projetos;
