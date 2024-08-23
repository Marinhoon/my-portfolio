import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
