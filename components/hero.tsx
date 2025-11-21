"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { useState } from "react";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between font-inter">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative z-10">
        
        {/* TAG */}
       <div className="
  mb-6 mx-auto
  tracking-wide text-[12px] sm:text-[13px] font-medium
  px-5 py-3
  bg-white/10 backdrop-blur-sm rounded-4xl
   shadow-[0_0_20px_rgba(255,255,255,0.08)]
  w-fit
">
  MANUFACTURING • DIGITAL TRANSFORMATION 
</div>

        {/* PREMIUM HEADING */}
        <h1 className="
          text-5xl sm:text-6xl md:text-7xl 
          font-light leading-tight font-sentient
        ">
          Precision Software for  
          <br />
          <span className="font-extralight text-primary">
            Modern Manufacturers.
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
  className="
    font-light text-[15px] sm:text-base 
    text-white/80 leading-relaxed
    max-w-[540px] mx-auto mt-8
  "
>
  We design modern ERP platforms, intelligent automation systems,
  and custom web applications that help manufacturers scale with
  precision, clarity, and control.
</p>


        {/* CTA BUTTON */}
        <Link href="/#contact" className="contents max-sm:hidden">
          <button
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="
              mt-14 px-8 py-2.5 rounded-3xl
              font-light tracking-wide text-[15px]
              text-white/85 
              border border-white/20
              bg-white/[0.06] backdrop-blur-md
              shadow-[0_0_20px_rgba(255,255,255,0.08)]
              relative overflow-hidden

              transition-all duration-500
              hover:bg-white/[0.12]
              hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]
              hover:scale-[1.04]
            "
          >
            <span className="
              absolute inset-0 opacity-20 
              bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.6),transparent)]
              translate-x-[-150%] 
              group-hover:translate-x-[150%]
              transition-transform duration-700
            "></span>

            Let’s Build Something Great
          </button>
        </Link>


        {/* Mobile button */}
        <Link href="/#contact" className="contents sm:hidden">
          <Button
            size="sm"
            className="mt-14 text-sm tracking-wide font-normal"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Start Your Project
          </Button>
        </Link>

      </div>
      
      
    </div>
  );
}
