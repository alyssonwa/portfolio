import React, { useState } from 'react';
import './index.css';
import './media-query.css';
import MenuIcon from '@mui/icons-material/Menu';
import LogoEstrela from '../logo';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <>
      <header>
        <h1>
          <LogoEstrela />
          Alysson Alves
        </h1>
        <button
          className="botao-menu"
          onClick={alternarMenu}
          aria-label="Abrir menu" // Boa prática para acessibilidade!
        >
          <MenuIcon />
        </button>
        <nav className={`nav-menu ${menuAberto ? 'ativo' : ''}`}>
          <a href="#">Início</a>
          <a href="#">Projetos</a>
          <a href="#">Sobre Mim</a>
          <a href="#">Contato</a>
          <a href="#">Currículo</a>
        </nav>
      </header>
    </>
  );
};
export default Header;
