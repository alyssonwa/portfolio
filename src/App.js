import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/header';
import Resumo from './components/resumo';

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
      <Resumo />
    </div>
  );
}
export default App;
