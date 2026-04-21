import React from 'react';
import styles from './Resumo.module.css';
import LogoReact from '../icons/react';
import LogoNext from '../icons/next';
import LogoFigma from '../icons/figma';

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
            Desenvolvo páginas para a web de forma responsiva e acessível,
            utilizando tecnologias como:{' '}
          </p>
          <ul>
            <li>
              React <LogoReact />
            </li>
            <li>
              Next.js <LogoNext />
            </li>
            <li>
              Figma <LogoFigma />
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Resumo;
