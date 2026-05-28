import React, { useState, useRef, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ModalProjetos.module.css'; // Ajuste o caminho do seu CSS se necessário

// Note que sumiram as props de arrasto, pegamos apenas o controle de abertura/fechamento
export default function ModalProjeto({ modalAberto, alternarModal, projeto }) {
  // 1. Estados e Refs do ARRASTO moram aqui dentro agora!
  const [arrastandoPos, setArrastandoPos] = useState(0);
  const touchStartPos = useRef(0);

  // 2. O useEffect do Scroll também fica aqui
  useEffect(() => {
    if (modalAberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalAberto]);

  // Se não estiver aberto, não renderiza nada
  if (!modalAberto || !projeto) return null;

  // 3. Suas funções de lógica internas
  const iniciarArrasto = (e) => {
    touchStartPos.current = e.clientY || (e.touches && e.touches[0].clientY);
  };

  const movendoArrasto = (e) => {
    if (touchStartPos.current === 0) return;
    const currentPos = e.clientY || (e.touches && e.touches[0].clientY);
    const diferenca = currentPos - touchStartPos.current;
    if (diferenca > 0) {
      setArrastandoPos(diferenca);
    }
  };

  const finalizarArrasto = () => {
    if (arrastandoPos > 150) {
      alternarModal(); // Chama a função do pai para fechar
    }
    setArrastandoPos(0);
    touchStartPos.current = 0;
  };

  const {
    titulo,
    logoBanner,
    loginBanner,
    corFundoBanner,
    corFundoLista,
    corFundoLink,
    descricao,
    tecnologias, // Array de strings: ['React Native', 'Figma'...]
    iconesTecnologias: Icones, // Componente contendo os SVGs/Icons
    objetivos, // Array de strings
    contribuicaoContexto, // Array com os parágrafos de texto
    links, // Array de objetos: [{ nome: 'Github', url: '...', icone: <LogoGithub /> }]
  } = projeto;

  return (
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
          transition: arrastandoPos === 0 ? 'transform 0.5s ease-out' : 'none',
        }}
      >
        <div className={styles.topoFixoModal}>
          {/* Alça do Modal */}
          <div
            className={styles.alçaModal}
            onMouseDown={iniciarArrasto}
            onTouchStart={iniciarArrasto}
            title="Fechar"
          ></div>
          {/* Botão de Fechar */}
          <button className={styles.fecharModal} onClick={alternarModal}>
            <CloseIcon fontSize="medium" />
          </button>
        </div>

        {/* Banner com Cor Customizada por Prop */}
        <div
          className={styles.bannerModal}
          style={{ background: corFundoBanner || '#0F172A' }}
        >
          <img
            src={logoBanner}
            alt={`Logo ${titulo}`}
            className={styles.logoBanner}
          />
          {loginBanner && (
            <img
              src={loginBanner}
              alt={`Tela de Login ${titulo}`}
              className={styles.logoBanner}
            />
          )}

          {/* Ícones do Desktop (Hover) */}
          {Icones && (
            <article className={styles.tecnologiasDesktop}>
              <Icones />
            </article>
          )}
        </div>

        {/* Corpo do Texto Limitado */}
        <div className={styles.limitadorTexto}>
          <h2>{titulo}</h2>

          {/* Ícones do Mobile */}
          {Icones && (
            <article className={styles.tecnologiasMobile}>
              <Icones />
            </article>
          )}

          <p>{descricao}</p>

          {/* Cards Flex de Tecnologias e Objetivos */}
          <div className={styles.cardsModal}>
            <div className={styles.cardItem}>
              <h3>Tecnologias Utilizadas</h3>
              <ul
                className={styles.cardLista}
                style={{ background: corFundoLista || 'var(--CorFundo)' }}
              >
                {tecnologias.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className={styles.cardItem}>
              <h3>Objetivos alcançados</h3>
              <ul
                className={styles.cardLista}
                style={{ background: corFundoLista || 'var(--CorFundo)' }}
              >
                {objetivos.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Seção de Contribuição Dinâmica (Gera parágrafos automaticamente) */}
          <div className={styles.detalhesProjeto}>
            <h3>Minha contribuição e contexto do projeto</h3>
            {contribuicaoContexto.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>

          {/* Menu de Links Úteis */}
          <nav className={styles.linksProjeto}>
            <h3>Links Relevantes:</h3>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      '--cor-link-customizada':
                        corFundoLink || 'var(--CorFundo)',
                    }}
                  >
                    {link.nome}
                    {link.icone}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
