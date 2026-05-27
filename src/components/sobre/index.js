import React from 'react';
import styles from './Sobre.module.css';

const SobreMim = () => {
  return (
    <section className={styles.sobreContainer}>
      <div className={styles.sobreConteudo}>
        <h1>Sobre Mim</h1>
        <div className={styles.sobreTabela}>
          <div className={styles.sobreTexto}>
            <p>
              Sou desenvolvedor web frontend formado em ciência da computação,
              com 2 anos de experiência. Utilizando tecnologias como JavaScript,
              Node.js, React.js, Figma, TailWind e Github.
            </p>
            <p>
              Como desenvolvedor na Secretaria de Estado da Educação de Alagoas,
              trabalhei construindo e traduzindo layouts de sites em códigos
              escaláveis, auxiliando na construção de sistemas utilizados pelo
              governo em todo o estado. Possuo experiência em todo o ciclo de
              desenvolvimento web, desde a criação dos protótipos utilizando
              ferramentas como figma, até integração com API e o banco de dados,
              componentização de elementos em React, além da utilização de
              GitHub para versionamento de código de forma eficiente e em
              equipe.
            </p>
            <p>
              Na faculdade tive a oportunidade de participar de diversos
              projetos desafiadores, como o aplicativo Sonhario, o qual foi
              utilizado para o meu TCC, um diário de hábitos de sono que utiliza
              dados para melhorar a rotina do usuário através de uma LLM, no
              qual pude obter experiência prática com React Expo e Django.
            </p>
          </div>
          <div className={styles.tabelaHabilidades}>
            <table>
              <tr>
                <th colspan="4">Habilidades</th>
              </tr>
              <tr>
                <th colspan="2">Linguagens</th>
                <td colspan="2">Python | JavaScript | PHP</td>
              </tr>
              <tr>
                <th colspan="2">Front-end</th>
                <td>HTML | CSS | Expo| React</td>
              </tr>
              <tr>
                <th colspan="2">Banco de dados</th>
                <td>MySQL | PostgresSQL | MongoDB</td>
              </tr>
              <tr>
                <th colspan="2">Ferramentas e colaboração</th>
                <td>Github | Figma</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* fim div conteudo */}
    </section>
  );
};
export default SobreMim;
