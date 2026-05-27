import React from 'react';
import styles from './Contato.module.css';
import LogoLinkedin from '../icons/linkedin';
import LogoGithub from '../icons/github';
import EmailIcon from '@mui/icons-material/Email';

const Contato = () => {
  return (
    <section className={styles.contatoContainer}>
      <div className={styles.contatoConteudo}>
        <h1>Contato</h1>
        <p>
          Estou sempre disposto a conversar sobre oportunidades e projetos
          desafiadores!
        </p>
        <ul>
          <li>
            <a
              href="mailto:alyssonwa02@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              alyssonwa02@gmail.com
              <EmailIcon fontSize="medium" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alysson-wanderley-alves-7a331b1b2/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
              <LogoLinkedin size="30" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alyssonwa"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <LogoGithub size="28" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Contato;
