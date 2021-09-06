import React from 'react';
import './intro.css';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
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
