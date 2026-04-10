import React from 'react';
import './index.css';
import './media-query.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <>
      <header>
        <h1>Alysson Alves</h1>
        <MenuIcon id="botao-menu" onclick="clickMenu()" />
        <nav>
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
