import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/header';
import Resumo from './components/resumo';
import Projetos from './components/projetos';
import SobreMim from './components/sobre';
import Contato from './components/contato';
import Footer from './components/footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 570) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className={styles.container}
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      <div className={styles.spotlight}></div>

      <Header />
      <div id="inicio">
        <Resumo />
      </div>
      <div id="projetos">
        <Projetos />
      </div>
      <div id="sobre-mim">
        <SobreMim />
      </div>
      <div id="contato">
        <Contato />
      </div>
      <Footer />
    </div>
  );
}
export default App;
