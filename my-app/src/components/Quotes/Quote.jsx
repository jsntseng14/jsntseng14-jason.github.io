import React, {useRef, useEffect} from 'react'
import './quote.scss';
import {TweenMax, Power3, Power1, gsap} from 'gsap'

// import { TimelineLite, TweenLite} from 'TweenLite'
// import { useIntersection } from "react-use";
// import * as THREE from 'three';

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#bg'),
// });

// renderer.setPixelRatio( window.devicePixelRatio );
// renderer.setSize( window.innerWidth, window.innerHeight );
// camera.position.setZ(30);

// renderer.render( scene, camera );

// const geometry = new THREE.TorusGeometry( 10, 3, 16, 100)
// const material = new THREE.MeshBasicMaterial( {color: 0xFF6347, wireframe: true } );
// const torus = new THREE.Mesh( geometry, material );

// scene.add(torus)

// function animate() {
//   requestAnimationFrame( animate );
//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;
//   renderer.render( scene, camera );
// }

// animate();

export default function Quote() {
  let item = useRef(null);

  // const flightPath = {
  //   curviness: 1.25,
  //   autoRotate: true,
  //   values: [
  //     {x: 100, y: -20}
  //   ]
  // }

  // const tween = new gsap.TimelineLite();

  // tween.add(
  //   gsap.TweenLite.to('.paper-plane', 1, {
  //     bezier: flightPath,
  //     ease: Power1.easeInOut
  //   })
  // )

  // useEffect(() => {
  //   const tl = gsap.timeline();
    // tl.to(".intro-text", {duration: 20, rotation: 360});
    // gsap.TweenMax.to(
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

  // },[])

  return (
    <div className="quote">
      {/* <canvas className="canvas" id="bg"></canvas> */}
          <img class="paper-plane" src="../../../assets/paper.png" alt="paper-plane"></img>
      <div className="quotes">
      <div className="intro-text" ref={el => {item = el}}>
        <h1 className="hide">
          <span className="text">"Creating inovation</span>
        </h1>
        <h1 className="hide">
          <span className="text">For Everyday</span>
        </h1>
        <h1 className="hide">
          <span className="text">people."</span>
        </h1>
      </div>
    </div>
    <div class="slider"></div>
  </div>
  )
}

