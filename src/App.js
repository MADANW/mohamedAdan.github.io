import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects />
      </main>
    </div>
  );
}

export default App;
