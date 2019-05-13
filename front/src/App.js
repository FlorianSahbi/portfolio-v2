import React from 'react';
import './Reset.css';
import './App.css';
import NavBar from './pages/navBar/NavBar';
import Header from './pages/header/Header';
import Formation from './pages/formation/FormationList';
import CurrentJob from './pages/currentJob/CurrentJob';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Hobbies from './pages/hobbies/Hobbies';
import Footer from './pages/footer/Footer';
import Loader from './Loader';
import './mediaQueries.css';

function App() {
  return (
    <div className="App">
      <Loader />
      <NavBar />
      <Header />
      <Formation />
      <CurrentJob />
      <Projects />
      <Skills />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
