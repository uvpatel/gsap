"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Gsap_Text() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to("#text", {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        duration: 0.8,
      });

      gsap.fromTo(
        ".para",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          delay: 0.6,
          stagger: 0.1,
          duration: 0.6,
        }
      );
    },
    { scope: container } // ✅ important
  );

  return (
    <main ref={container}>
      <h1 id="text" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        We can use same methods like <code>gsap.to()</code>,{" "}
        <code>gsap.fromTo()</code>, <code>gsap.timeline()</code> to animate text.
      </p>
    </main>
  );
}

export default Gsap_Text;
