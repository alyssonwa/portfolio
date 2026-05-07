import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Projetos.module.css';
import CelMockup from '../mockups/celular';
import PcMockup from '../mockups/pc';
import PrintSonhario from './CapasProjetos/sonhario/sonhario.png';
import PrintTavernTalk from './CapasProjetos/tavernTalk/tavern_talk.png';
import PrintGap from './CapasProjetos/gap/gap.png';

const Projetos = () => {
  const [modalAberto, setModalAberto] = useState(false);
  useEffect(() => {
    if (modalAberto) {
      // Quando o modal abre, trava o scroll do corpo da página
      document.body.style.overflow = 'hidden';
    } else {
      // Quando o modal fecha, devolve o scroll
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalAberto]); // Só executa quando 'modalAberto' mudar

  const alternarModal = () => {
    setModalAberto(!modalAberto);
  };
  return (
    <main className={styles.projetosContainer}>
      <h1>Meus Projetos</h1>
      <section className={styles.sonhario}>
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
          <button onClick={alternarModal}>Saiba mais...</button>
        </div>
      </section>
      {/* Renderização Condicional do Modal */}
      {modalAberto && (
        <div className={styles.modalOverlay} onClick={alternarModal}>
          <div
            className={styles.modalConteudo}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={styles.alçaModal}
              onClick={alternarModal}
              title="Fechar"
            ></div>
            <button className={styles.fecharModal} onClick={alternarModal}>
              &times;
            </button>
            <h2>Detalhes do Sonhário</h2>
            <p>
              Aqui você coloca a descrição completa, tecnologias usadas e links.
            </p>
            {/* Exemplo de lista de tecnologias */}
            <ul>
              <li>React + CSS Modules</li>
              <li>Figma para UI/UX</li>
              <li>PokeAPI (ou a API que você usou)</li>
            </ul>
          </div>
        </div>
      )}
      <section className={styles.tavernTalk}>
        <div className={styles.projetoImagem}>
          <div className={styles.celularMockup}>
            <CelMockup className={styles.mockupSvg} />
            <img
              src={PrintTavernTalk}
              alt="Tela de ficha Tavern Talk"
              className={styles.print}
            />
          </div>
        </div>
        <div className={styles.projetoDescricao}>
          <h1>Tavern Talk</h1>
          <p>Aplicativo web gerador de fichas de RPG</p>
          <button>Saiba mais...</button>
        </div>
      </section>
      <section className={styles.gap}>
        <div className={styles.projetoImagem}>
          <div className={styles.pcMockup}>
            <PcMockup className={styles.mockupSvg} />
            <img
              src={PrintGap}
              alt="Tela de status de ações"
              className={styles.printPc}
            />
          </div>
        </div>
        <div className={styles.projetoDescricao}>
          <h1>GAP</h1>
          <p>Site de gerenciamento de ações</p>
          <button>Saiba mais...</button>
        </div>
      </section>
    </main>
  );
};
export default Projetos;
