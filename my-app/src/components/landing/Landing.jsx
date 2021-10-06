import { useRef, React, useEffect } from 'react'
import {TweenMax, Power3, gsap} from 'gsap'
import './landing.scss'

export default function Landing() {

  useEffect(() => {
  const tl = gsap.timeline();
  tl.from(".stagger", {opacity: 0, y: "-30%", duration: 1.0, ease: 'Power2.easeInOut', stagger: 0.2});
  tl.from(".square-anim1", {opacity: 0, y: "-50%", duration: 1.0, ease: 'Power2.easeInOut'}, ">-0.5");
  tl.from(".square-anim2", {opacity: 0, x: "-50%", duration: 1.0, ease: 'Power2.easeInOut'}, ">-1.4");
  tl.from(".square-anim3", {opacity: 0, y: "50%", duration: 1.0, ease: 'Power2.easeInOut'}, ">-1.1");
  tl.from(".square-anim4", {opacity: 0, x: "50%", duration: 1.0, ease: 'Power2.easeInOut'}, ">-0.8");
  tl.from(".square-anim5", {opacity: 0, y: "-50%", duration: 1.0, ease: 'Power2.easeInOut'}, ">-0.9");
  tl.from(".square-anim6", {opacity: 0, x: "50%", duration: 1.0, ease: 'Power2.easeInOut'}, ">-1.3");
  tl.from(".square-anim7", {opacity: 0, y: "50%", duration: 1.0, ease: 'Power2.easeInOut'}, ">-1.2");
  tl.from(".square-anim8", {opacity: 0, x: "-50%", duration: 1.0, ease: 'Power2.easeInOut'}, ">-1.5");


  },[])

  return (
    <div class="hero">
        <div class="content">
            <h1 class="stagger">Beautifully</h1>
            <h1 class="stagger">Crafted Web</h1>
            <h1 class="stagger">Experiences</h1>
            <p>👇 Meet Jason Tseng</p>
            <svg class="scroll" width="40" height="77" viewBox="0 0 40 77">
                <g id="scroll" transform="translate(-253 -787)">
                  <g id="Rectangle_12" data-name="Rectangle 12" transform="translate(253 787)" fill="none" stroke="#fff" stroke-width="4">
                    <rect width="40" height="77" rx="20" stroke="none"/>
                    <rect x="2" y="2" width="36" height="73" rx="18" fill="none"/>
                  </g>
                  <circle class="circle" id="Ellipse_1" data-name="Ellipse 1" cx="11" cy="11" r="11" transform="translate(262 798)" fill="#fff"/>
                </g>
              </svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="hero-design" width="686" height="688" viewBox="0 0 686 688">
            <g id="blockdesign" transform="translate(-935 -289)">
              <rect class="square-anim1" data-name="Rectangle 2" width="172" height="172" rx="19" transform="translate(1277 289)" fill="#6e00ff"/>
              <rect class="square-anim2" data-name="Rectangle 10" width="172" height="172" rx="86" transform="translate(1277 461)" fill="#ff64cb"/>
              <rect class="square-anim3" data-name="Rectangle 8" width="172" height="172" rx="19" transform="translate(1449 461)" fill="#e5d5fa"/>
              <rect class="square-anim4" data-name="Rectangle 5" width="172" height="172" rx="19" transform="translate(1277 633)" fill="#6e00ff"/>
              <rect class="square-anim5" data-name="Rectangle 3" width="172" height="172" rx="19" transform="translate(1107 461)" fill="#fff"/>
              <rect class="square-anim6" data-name="Rectangle 9" width="172" height="172" rx="86" transform="translate(1107 633)" fill="#00f7ff"/>
              <rect class="square-anim7" data-name="Rectangle 7" width="172" height="172" rx="19" transform="translate(935 633)" fill="#fff" opacity="0.17"/>
              <rect class="square-anim8" data-name="Rectangle 4" width="172" height="172" rx="19" transform="translate(1107 805)" fill="#fff"/>
            </g>
          </svg>
    </div>
  )
}