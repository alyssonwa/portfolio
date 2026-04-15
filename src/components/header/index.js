import React, { useState } from 'react';
import './index.css';
import './media-query.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LogoEstrela from '../logo';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

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
      <header>
        <h1
          onClick={irParaHome}
          className="logo-clicavel"
          role="button"
          tabIndex="0"
        >
          <LogoEstrela />
          Alysson Alves
        </h1>
        <button
          className="botao-menu"
          onClick={alternarMenu}
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </button>
        {/* Se menuAberto for true, adiciona a classe 'aberto' */}
        <nav className={`nav-menu ${menuAberto ? 'aberto' : ''}`}>
          <button
            className="fechar-botao"
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
                <ArrowOutwardIcon fontSize="small" className="seta-arquivo" />
              </a>
            </li>
          </ul>
        </nav>
        {/* Overlay: Fundo escurecido que aparece atrás do menu */}
        {menuAberto && <div className="overlay" onClick={alternarMenu}></div>}
      </header>
    </>
  );
};
export default Header;
