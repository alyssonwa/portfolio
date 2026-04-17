import React from 'react';
import styles from './Resumo.module.css';

const Resumo = () => {
  return (
    <section className={styles.resumoContainer}>
      <div className={styles.conteudo}>
        <h1 className={styles.titulo}>Desenvolvedor Front-end</h1>
        <ul className={styles.listaRedes}>
          <li className={styles.itemRede}>
            <a href="#" className={styles.linkRede}>
              {/* Seus ícones ou textos de redes sociais aqui */}
              LinkedIn
            </a>
          </li>
          <li className={styles.itemRede}>
            <a href="#" className={styles.linkRede}>
              GitHub
            </a>
          </li>
          <li className={styles.itemRede}>
            <a href="#" className={styles.linkRede}>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Resumo;
