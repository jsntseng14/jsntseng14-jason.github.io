import React, {useRef, useEffect} from 'react'
import './quote.scss';
import {TweenMax, Power3, gsap} from 'gsap'

export default function Quote() {
  let item = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".intro-text", {duration: 1.5, rotation: 360});
    tl.to(".intro-text", {duration: 1.5, rotation: 180});
    // TweenMax.to(
    //   item,
    //   .8,
    //   {
    //     opacity: 1,
    //     y: -20,
    //     ease: Power3.easeOut,
    //   }
    // )

    // tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    // tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    // tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    // tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    // tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

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

