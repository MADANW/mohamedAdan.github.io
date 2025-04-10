import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
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
      <div 
        className="scroll-indicator" 
        style={{ width: `${(scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
      ></div>
      <Header />
      <main>
        <AboutMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
