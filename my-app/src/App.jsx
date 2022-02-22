import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import './app.scss';
import { useState } from 'react';
import Menu from './components/menu/Menu';
import Quote from './components/Quotes/Quote'
import Landing from './components/landing/Landing'
import React from "react";
import { Routes, Switch, Route} from 'react-router-dom';


function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className='sections'>
          <Landing/>
          <Intro/>
          <Quote/>
          <Portfolio/>
          <Works/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
