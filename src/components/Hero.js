import React from "react";
import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";
import kashi from "../SVG/kashi.svg";
import whiteside from "../SVG/whiteside.svg";
import whiteside2 from "../SVG/whiteside2.svg";

function Hero() {
  const [start, setStart] = useState(false);
  let hero = useRef(null);
  let frame = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();
    let t2 = gsap.timeline();
    // if (start) {
    //   tl.to(hero.current, {
    //     duration: 1,

    //     y: "120vh",
    //     ease: "power4.out",
    //   }).to(hero.current, {
    //     opacity: 0,
    //   });
    // }

    t2.from(frame.current, { opacity: 0, delay: 2 }).to(
      frame.current,
      {
        opacity: 1,
        duration: 10,
      },
      "<"
    );
  }, [start]);

  return (
    <div
      ref={hero}
      className="relative z-10 w-[100vw] h-[100vh] sm:h-screen sm:w-screen bg-black"
    >
      <button
        onClick={() => setStart(true)}
        class="bg-white absolute bottom-10 rounded-lg z-40 mx-auto inset-x-0 w-20 h-10"
      >
        Start
      </button>
      <div className="absolute z-30 w-[100vw]  sm:w-screen top-[25%]">
        <img className="inset-x-0 w-8/12 mx-auto" src={kashi} alt="" />
      </div>
      <div className="absolute z-30 h-[100vh] sm:h-screen left-5">
        <img className="w-5 h-full sm:w-10" src={whiteside2} alt="" />
      </div>
      <div className="absolute z-30 h-[100vh] sm:h-screen right-5">
        <img className="w-5 h-full sm:w-full" src={whiteside2} alt="" />
      </div>
      <div className="absolute z-20 w-[100vw] h-[100vh] sm:h-screen sm:w-screen bg-black/80 "></div>
      <div className="absolute z-20 w-[100vw] h-[100vh] sm:h-screen sm:w-screen glass "></div>

      <iframe
        ref={frame}
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/4qjQGb3wqRI?controls=0&autoplay=1&mute=1&modestbranding=1"
        title="Kashiyatra 2020 | Official Aftermovie | Rendition of the Retro | IIT(BHU) Varanasi"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Hero;
