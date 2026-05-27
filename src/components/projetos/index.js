import React from 'react';
import { useState } from 'react';
import ModalProjetos from '../ModalProjetos/index.js';
import styles from './Projetos.module.css';
import CelMockup from '../mockups/celular';
import PcMockup from '../mockups/pc';

import DescriptionIcon from '@mui/icons-material/Description';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import PrintSonhario from './CapasProjetos/sonhario/sonhario.png';
import PrintTavernTalk from './CapasProjetos/tavernTalk/tavern_talk.png';
import PrintGap from './CapasProjetos/gap/gap.png';

import LogoSonhario from './LogosProjetos/sonhario/logo_sonhario.png';
import LoginSonhario from './LogosProjetos/sonhario/tela_login_sonhario.png';
import LogoTavernTalk from './LogosProjetos/tavern_talk/logo_tavern_talk.png';
import LoginTavernTalk from './LogosProjetos/tavern_talk/tela_login_tavern_talk.png';
import LogoGap from './LogosProjetos/gap/logo_gap.png';
import LoginGap from './LogosProjetos/gap/tela_login_gap.png';

import LogoReact from '../icons/react';
import LogoExpo from '../icons/expo';
import LogoDjango from '../icons/django';
import LogoFigma from '../icons/figma';
import LogoGithub from '../icons/github';
import LogoPostgreSQL from '../icons/postgreSQL';
import LogoMongoDB from '../icons/mongoDB';
import LogoVercel from '../icons/vercel';
import LogoNext from '../icons/next';
import LogoMySQL from '../icons/mySQL';
import LogoJavaScript from '../icons/javascript';
import LogoVite from '../icons/vite';

//COMPONENTE AUXILIAR PARA OS ÍCONES DO BANNER
const IconesSonhario = () => (
  <>
    <abbr title="Figma">
      <LogoFigma />
    </abbr>
    <abbr title="Django">
      <LogoDjango />
    </abbr>
    <abbr title="React Native">
      <LogoReact />
    </abbr>
    <abbr title="Expo">
      <LogoExpo />
    </abbr>
    <abbr title="PostgreSQL">
      <LogoPostgreSQL />
    </abbr>
  </>
);

// 3. O OBJETO COM TODOS OS DADOS DO SONHARIO
const dadosSonhario = {
  titulo: 'Sonhario',
  logoBanner: LogoSonhario,
  loginBanner: LoginSonhario,
  corFundoBanner: '#131A35',
  corFundoLista:
    'linear-gradient(180deg, rgba(33,40,74,0.59) 0%, rgba(55,71,150,0.59) 100%)',
  corFundoLink:
    'linear-gradient(180deg, rgba(33,40,74,0.59) 0%, rgba(55,71,150,0.59) 100%)',
  descricao:
    'Aplicativo mobile desenvolvido com o objetivo de analisar a rotina de sono do usuário a partir dos dados inseridos. Sendo possível utilizá-los para previsão de produtividade e sugestões de melhorias a partir de um modelo de aprendizagem de máquina, além de funcionar como diário de hábitos de sono, com geração de gráficos e recomendações textuais de acordo com o seu histórico de sono.',
  tecnologias: ['React Native', 'Figma', 'Django', 'React Expo', 'PostgreSQL'],
  iconesTecnologias: IconesSonhario,
  objetivos: [
    'Previsões de produtividade',
    'Feedback gráfico e textual',
    'App funcional multiplataforma',
    'Diário de sono',
  ],
  contribuicaoContexto: [
    'Neste projeto, participei principalmente como UX designer, auxiliando na prototipação das telas do aplicativo no figma e, posteriormente, recriando essas telas no código juntamente ao time de front-end, em que buscamos criar um fluxo simples, intuitivo e dinâmico para o usuário, utilizando o framework Expo.',
    'Apesar de termos obtido uma aplicação funcional, ainda há barreiras no desempenho devido a limitações de hospedagem, publicação em lojas de aplicativo e banco de dados gratuitos. Isso se deve em grande parte ao contexto de desenvolvimento ter sido voltado principalmente para fins acadêmicos, visto que o projeto foi uma das principais bases do nosso TCC, auxiliando para fins de pesquisa acerca da higiene do sono, influência da cafeína e consistência de exercícios físicos para o sono.',
  ],
  links: [
    {
      nome: 'Github',
      url: 'https://github.com/omarcosss/sonhario-front',
      icone: <LogoGithub />,
    },
    {
      nome: 'Página de documentação e download',
      url: 'https://bunny-sammy.github.io/sonhario-api/',
      icone: <DescriptionIcon fontSize="small" />,
    },
  ],
};

//dados tavern_talk:
const IconesTavernTalk = () => (
  <>
    <abbr title="Figma">
      <LogoFigma />
    </abbr>
    <abbr title="Next">
      <LogoNext />
    </abbr>
    <abbr title="React">
      <LogoReact />
    </abbr>
    <abbr title="MongoDB">
      <LogoMongoDB />
    </abbr>
    <abbr title="Vercel">
      <LogoVercel />
    </abbr>
  </>
);

// 3. OBJETO dOS DADOS DO TAVERN-TALK
const dadosTavernTalk = {
  titulo: 'TavernTalk',
  logoBanner: LogoTavernTalk,
  loginBanner: LoginTavernTalk,
  corFundoBanner: 'linear-gradient(#8B8B8B,#E2E1E1,#8B8B8B)',
  corFundoLista: 'linear-gradient(#4B1515, 45%, #17080800)',
  corFundoLink: '#4b1515ee',
  descricao:
    'Aplicação web mobile first feita com o intuito de facilitar a criação de fichas de personagens de RPG, utilizando a base do RPG de Dungeons and Dragons(D&D). Em que o usuário seleciona as opções para criação do personagem por meio de um fluxo simples guiado por um chatbot, ao final do processo o gerador de ficha salva automaticamente as informações setadas pelo usuário e apresenta os dados do personagem de forma estilizada, incluindo detalhes númericos como os atributos e nível do personagem.',
  tecnologias: ['React', 'Figma', 'Next', 'MongoDB', 'Vercel'],
  iconesTecnologias: IconesTavernTalk,
  objetivos: [
    'Gerador de fichas de RPG',
    'Interação guiada com chatbot',
    'Site funcional mobile first',
    'Interface com design inspirado em D&D',
  ],
  contribuicaoContexto: [
    'No Tavern Talk, participei principalmente como desenvolvedor front-end e UX designer, em que auxilei a recriar as telas do figma em código, buscando tornar todo o processo de geração da ficha em algo intuitivo e dinâmico para o usuário, ao mesmo tempo em que mantinha a identidade visual do projeto.',
    'No contexto do projeto, o qual se tratava de um trabalho acadêmico, embora seja uma aplicação que faria sentido ser um aplicativo de celular, minha equipe e eu acabamos optando por fazer a aplicação em forma de página web, pois ainda não estávamos habituados a trabalhar com frameworks específicos para mobile. Apesar disso, foi uma excelente oportunidade para aprender a trabalhar com o framework Next.js.',
  ],
  links: [
    {
      nome: 'Github',
      url: 'https://github.com/bunny-sammy/tavern-talk',
      icone: <LogoGithub />,
    },
    {
      nome: 'Site publicado',
      url: 'https://tavern-talk.vercel.app/',
      icone: <ArrowOutwardIcon fontSize="small" />,
    },
  ],
};

//dados gap:
const IconesGap = () => (
  <>
    <abbr title="Figma">
      <LogoFigma />
    </abbr>
    <abbr title="MySQL">
      <LogoMySQL />
    </abbr>
    <abbr title="JavaScript">
      <LogoJavaScript />
    </abbr>
    <abbr title="React">
      <LogoReact />
    </abbr>
    <abbr title="Vite">
      <LogoVite />
    </abbr>
  </>
);

// 3. OBJETO dOS DADOS DO GAP
const dadosGap = {
  titulo: 'GAP',
  logoBanner: LogoGap,
  loginBanner: LoginGap,
  corFundoBanner: 'linear-gradient(#005CA9,#2794CD)',
  corFundoLista: 'linear-gradient(#005CA9,#2794CD)',
  corFundoLink: 'linear-gradient(#005CA9,#2794CD)',
  descricao:
    'Sistema desenvolvido em React para o gerenciamento de atribuições e projetos. Utilizado principalmente para uso interno do setor de TI da SEDUC/AL, de forma a facilitar a visualização e gerenciamento dos projetos em andamento no setor. O sistema possui funcões úteis nesse sentido, como a visualização do andamento dos projetos, assim como suas ações pendentes, ativas e concluídas',
  tecnologias: ['React', 'Figma', 'JavaScript', 'MySQL', 'Vite'],
  iconesTecnologias: IconesGap,
  objetivos: [
    'Visualização de ações por projeto',
    'Gerenciamento de projetos',
    'Plataforma web responsiva',
    'Interface moderna',
  ],
  contribuicaoContexto: [
    'Neste sistema, minha participação foi principalmente como desenvolvedor front-end, visto que o figma já estava pronto e o projeto em andamento quando entrei para a equipe. Junto à equipe do front, fui capaz de auxilar na criação do código das telas do figma, além de realizar algumas manutenções para que telas antigas se adaptassem à funções novas que o time estava implementando na época.',
    'Nesse contexto, apesar de ter entrado com pouca experiência, visto que foi um dos primeiros projetos dos quais participei ativamente no estágio, foi uma ótima oportunidade para aprender a trabalhar com diversas ferramentas. Em especial React e JavaScript, mas também o Github para versionamento de código, o qual se mostrou essencial para manter tudo organizado mesmo com uma equipe grande trabalhando no mesmo sistema de forma simultânea.',
  ],
  links: [
    {
      nome: 'Site publicado',
      url: 'https://gap.educacao.al.gov.br/login',
      icone: <ArrowOutwardIcon fontSize="small" />,
    },
  ],
};

const Projetos = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const abrirModal = (projeto) => {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  };
  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };
  return (
    <main className={styles.projetosContainer}>
      <h1>Projetos em Destaque</h1>
      {/* seção sonhario */}
      <section className={styles.sonhario}>
        <div className={styles.projetoImagem}>
          <div className={styles.celularMockup}>
            <CelMockup className={styles.mockupSvg} />
            <img
              src={PrintSonhario}
              alt="Tela inicial Sonhario"
              className={styles.print}
            />
          </div>
        </div>
        <div className={styles.projetoDescricao}>
          <h1>Sonhario</h1>
          <p>Aplicativo de diário de hábitos de sono</p>
          <button onClick={() => abrirModal(dadosSonhario)}>
            Saiba mais...
          </button>
        </div>
        <ModalProjetos
          modalAberto={modalAberto}
          alternarModal={fecharModal}
          projeto={projetoSelecionado}
        />
      </section>
      {/* seção tavern_talk */}
      <section className={styles.tavernTalk}>
        <div className={styles.projetoImagem}>
          <div className={styles.celularMockup}>
            <CelMockup className={styles.mockupSvg} />
            <img
              src={PrintTavernTalk}
              alt="Tela de ficha Tavern Talk"
              className={styles.print}
            />
          </div>
        </div>
        <div className={styles.projetoDescricao}>
          <h1>Tavern Talk</h1>
          <p>Aplicativo web gerador de fichas de RPG</p>
          <button onClick={() => abrirModal(dadosTavernTalk)}>
            Saiba mais...
          </button>
        </div>
      </section>
      {/* seção gap */}
      <section className={styles.gap}>
        <div className={styles.projetoImagem}>
          <div className={styles.pcMockup}>
            <PcMockup className={styles.mockupSvg} />
            <img
              src={PrintGap}
              alt="Tela de status de ações"
              className={styles.printPc}
            />
          </div>
        </div>
        <div className={styles.projetoDescricao}>
          <h1>GAP</h1>
          <p>Site de gerenciamento de ações</p>
          <button onClick={() => abrirModal(dadosGap)}>Saiba mais...</button>
        </div>
      </section>
    </main>
  );
};
export default Projetos;
