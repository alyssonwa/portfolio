import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styles from './Projetos.module.css';
import CelMockup from '../mockups/celular';
import PcMockup from '../mockups/pc';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionIcon from '@mui/icons-material/Description';
import PrintSonhario from './CapasProjetos/sonhario/sonhario.png';
import PrintTavernTalk from './CapasProjetos/tavernTalk/tavern_talk.png';
import PrintGap from './CapasProjetos/gap/gap.png';
import LogoSonhario from './LogosProjetos/sonhario/logo.png';
import LoginSonhario from './LogosProjetos/sonhario/tela_login.png';

import LogoReact from '../icons/react';
import LogoExpo from '../icons/expo';
import LogoDjango from '../icons/django';
import LogoFigma from '../icons/figma';
import LogoGithub from '../icons/github';

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
      // O "return" é a limpeza: ele roda quando o modal fecha
      // ou quando o usuário sai daquela página.
      document.body.style.overflow = 'auto';
    };
  }, [modalAberto]); // Só executa quando 'modalAberto' mudar

  const [arrastandoPos, setArrastandoPos] = useState(0); // Rastreia o movimento
  const touchStartPos = useRef(0); // Guarda onde o toque começou

  const iniciarArrasto = (e) => {
    // Pega a posição inicial (mouse ou touch)
    touchStartPos.current = e.clientY || e.touches[0].clientY;
  };

  const movendoArrasto = (e) => {
    if (touchStartPos.current === 0) return;

    const currentPos = e.clientY || e.touches[0].clientY;
    const diferenca = currentPos - touchStartPos.current;

    // Só permite arrastar para BAIXO (diferença positiva)
    if (diferenca > 0) {
      setArrastandoPos(diferenca);
    }
  };

  const finalizarArrasto = () => {
    // Se arrastou mais de 150px (ou ajuste para a metade), fecha o modal
    if (arrastandoPos > 150) {
      setModalAberto(false);
    }

    // Reseta as posições
    setArrastandoPos(0);
    touchStartPos.current = 0;
  };
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
        <div
          className={styles.modalOverlay}
          onClick={alternarModal}
          onMouseMove={movendoArrasto}
          onMouseUp={finalizarArrasto}
          onTouchMove={movendoArrasto}
          onTouchEnd={finalizarArrasto}
        >
          <div
            className={styles.modalConteudo}
            onClick={(e) => e.stopPropagation()}
            style={{
              transform: `translateY(${arrastandoPos}px)`,
              transition:
                arrastandoPos === 0 ? 'transform 0.5s ease-out' : 'none',
            }}
          >
            <div
              className={styles.alçaModal}
              onMouseDown={iniciarArrasto}
              onTouchStart={iniciarArrasto}
              title="Fechar"
            ></div>
            <button className={styles.fecharModal} onClick={alternarModal}>
              <CloseIcon fontSize="small" />
            </button>
            <div className={styles.bannerModal}>
              <img
                src={LogoSonhario}
                alt="Logo Sonhario"
                className={styles.logoBanner}
              />
              <img
                src={LoginSonhario}
                alt="Login Sonhario"
                className={styles.logoBanner}
              />
              <article className={styles.tecnologiasDesktop}>
                <abbr>
                  <LogoFigma />
                </abbr>
                <abbr>
                  <LogoDjango />
                </abbr>
                <abbr>
                  <LogoReact />
                </abbr>
                <abbr>
                  <LogoExpo />
                </abbr>
              </article>
            </div>
            <div className={styles.limitadorTexto}>
              <h2>Sonhario</h2>
              <article className={styles.tecnologiasMobile}>
                <abbr>
                  <LogoFigma />
                </abbr>
                <abbr>
                  <LogoDjango />
                </abbr>
                <abbr>
                  <LogoReact />
                </abbr>
                <abbr>
                  <LogoExpo />
                </abbr>
              </article>
              <p>
                Aplicativo mobile desenvolvido com o objetivo de analisar a
                rotina de sono do usuário a partir dos dados inseridos. Sendo
                possível utilizá-los para previsão de produtividade e sugestões
                de melhorias a partir de um modelo de aprendizagem de máquina,
                além de funcionar como diário de hábitos de sono, com geração de
                gráficos e recomendações textuais de acordo com o seu histórico
                de sono.
              </p>
              {/* lista de tecnologias e objetivos */}
              <div className={styles.cardsModal}>
                <div className={styles.cardItem}>
                  <h3>Tecnologias Utilizadas</h3>
                  <ul className={styles.cardLista}>
                    <li>React Native</li>
                    <li>Figma</li>
                    <li>Django</li>
                    <li>React Expo</li>
                  </ul>
                </div>
                <div className={styles.cardItem}>
                  <h3>Objetivos alcançados</h3>
                  <ul className={styles.cardLista}>
                    <li>Previsões de produtividade</li>
                    <li>Feedback gráfico e textual</li>
                    <li>App funcional multiplataforma</li>
                    <li>Diário de sono</li>
                  </ul>
                </div>
              </div>
              {/*Minha contribuição e contexto/detalhes do projeto */}
              <div className={styles.detalhesProjeto}>
                <h3>Minha contribuição e contexto do projeto</h3>
                <p>
                  Neste projeto, participei principalmente como UX designer,
                  auxiliando na prototipação das telas do aplicativo no figma e,
                  posteriormente, recriando essas telas no código juntamente ao
                  time de front-end, em que buscamos criar um fluxo simples,
                  intuitivo e dinâmico para o usuário, utilizando o framework
                  Expo.
                </p>
                <p>
                  Apesar de termos obtido uma aplicação funcional, ainda há
                  barreiras no desempenho devido a limitações de hospedagem,
                  publicação em lojas de aplicativo e banco de dados gratuitos.
                  Isso se deve em grande parte ao contexto de desenvolvimento
                  ter sido voltado principalmente para fins acadêmicos, visto
                  que o projeto foi uma das principais bases do nosso TCC,
                  auxiliando para fins de pesquisa acerca da higiene do sono,
                  influência da cafeína e consistência de exercícios físicos
                  para o sono.
                </p>
              </div>
              <nav className={styles.linksProjeto}>
                <h3>Links Relevantes:</h3>
                <ul>
                  <li>
                    <a
                      href="https://github.com/omarcosss/sonhario-front"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                      <LogoGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bunny-sammy.github.io/sonhario-api/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Página de documentação e download
                      <DescriptionIcon />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/*fim limitador de texto */}
          </div>
          {/* fim modal conteudo */}
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
