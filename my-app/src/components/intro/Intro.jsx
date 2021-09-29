import React from 'react';
import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import {TweenMax, Power3, gsap} from 'gsap'

export default function Intro() {
  let item = useRef(null);
  const textRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    // tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    // tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    // tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    // tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ['Developer', 'Designer', 'Content Creator'],
    });
  },[]);
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/jason2.jpg' alt=''/>
        </div>
      </div>
      <div className='right'>
          <div className='wrapper'>
            <h2>Hi There, I'm</h2>
            <h1>Jason Tseng</h1>
            <h3>Freelance <span ref={textRef}></span></h3>
          </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt=''/>
        </a>
      </div>
    </div>
  )
}
