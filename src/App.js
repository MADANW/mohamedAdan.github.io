import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import RetroGrid from './components/RetroGrid';
import './App.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <RetroGrid 
        cellSize={60} 
        opacity={0.8} 
        angle={65}
        lightLineColor="rgba(0, 0, 0, 0.75)"
        darkLineColor="rgba(255, 255, 255, 0.75)"
      />
      <div 
        className="scroll-indicator" 
        style={{ width: `${(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
      ></div>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
