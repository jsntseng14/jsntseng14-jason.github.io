import React, {useRef, useEffect} from 'react'
import './quote.scss';
import {TweenMax, Power3, gsap} from 'gsap'

export default function Quote() {
  let item = useRef(null);
  console.log(item);

  useEffect(() => {
    console.log(item)

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 10, stagger: 0.25 });

  },[])

  return (
    <div class="quote">
      <div class="quotes">
      <div class="intro-text" ref={el => {item = el}}>
        <h1 class="hide">
          <span class="text">"Creating inovation</span>
        </h1>
        <h1 class="hide">
          <span class="text">For Everyday</span>
        </h1>
        <h1 class="hide">
          <span class="text">people."</span>
        </h1>
      </div>
    </div>
    <div class="slider"></div>
  </div>
  )
}

