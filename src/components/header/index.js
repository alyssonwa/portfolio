import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import LogoEstrela from '../icons/logo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    if (menuAberto) {
      // Quando o modal abre, trava o scroll do corpo da página
      document.body.style.overflow = 'hidden';
    } else {
      // Quando o modal fecha, devolve o scroll
      document.body.style.overflow = 'auto';
    }

    // Função de limpeza (cleanup)
    // Garante que o scroll volte se o componente for desmontado inesperadamente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuAberto]); // Só executa quando 'modalAberto' mudar

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };
  const irParaHome = () => {
    setMenuAberto(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.botaoMenu}
          onClick={alternarMenu}
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </button>
        <h1
          onClick={irParaHome}
          className={styles.logoClicavel}
          role="button"
          tabIndex="0"
        >
          <LogoEstrela className={styles.estrelaSvg} />
          Alysson Alves
        </h1>
        {/* Se menuAberto for true, adiciona a classe 'aberto' */}
        <nav className={`${styles.navMenu} ${menuAberto ? styles.aberto : ''}`}>
          <button
            className={styles.fecharBotao}
            onClick={alternarMenu}
            aria-label="Fechar menu"
          >
            <CloseIcon />
          </button>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Sobre Mim</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">
                Currículo
                <ArrowOutwardIcon
                  fontSize="small"
                  className={styles.setaArquivo}
                />
              </a>
            </li>
          </ul>
        </nav>
        {/* Overlay: Fundo escurecido que aparece atrás do menu */}
        {menuAberto && (
          <div className={styles.overlay} onClick={alternarMenu}></div>
        )}
      </header>
    </>
  );
};
export default Header;
