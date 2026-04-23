import React from 'react';
import styles from './Resumo.module.css';
import LogoReact from '../icons/react';
import LogoNext from '../icons/next';
import LogoFigma from '../icons/figma';
import LogoTypeSrc from '../icons/typescript';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Resumo = () => {
  return (
    <section className={styles.resumoContainer}>
      <div className={styles.conteudo}>
        <h1>Desenvolvedor Front-end</h1>
        <ul>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">GitHub</a>
          </li>
          <li>
            <a href="#">Currículo</a>
          </li>
        </ul>
        <article>
          <p>
            Prototipo e desenvolvo páginas para a web de forma acessível e
            responsiva, utilizando tecnologias como:{' '}
          </p>
          <ul>
            <li>
              Figma <LogoFigma />
            </li>
            <li>
              React <LogoReact />
            </li>
            <li>
              Next.js <LogoNext />
            </li>
            <li>
              TypeScript <LogoTypeSrc />
            </li>
          </ul>
          <p>
            Ao longo de minha jornada profissional e acadêmica participei de
            diversos projetos, os quais foram essenciais para meu aprendizado e
            evolução como desenvolvedor web.
          </p>
          <a href="#" className={styles.linkProjetos}>
            Confira abaixo meus principais projetos{' '}
            <ArrowDropDownIcon
              fontSize="large"
              className={styles.setaBaixo}
            />{' '}
          </a>
        </article>
      </div>
    </section>
  );
};

export default Resumo;
