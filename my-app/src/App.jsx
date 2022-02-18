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
import { useIntersection } from "react-use";
import gsap from "gsap";
import React, { useRef } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1
  });

  const fadeIn = (element) => {
    gsap.to(sectionRef.current, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: .3
      }
    })
  };

  const fadeOut = (element) => {
    gsap.to(sectionRef.current, 1, {
      opacity: 1,
      y: -20,
      ease: 'power4.out',
      stagger: {
        amount: .3
      }
    })
  };

  intersection && intersection.intersectionRatio < .5 ?
  fadeOut("test")
  : fadeIn("test")

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
