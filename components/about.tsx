"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function About() {
  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
 
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prev =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  }, 3000); // 3 seconds delay

  return () => clearInterval(interval);
}, []);
  const teamMembers = [
    {
      name: "Mohit Sharma",
      role: "Founder & CEO",
      expertise: "Industrial AI • Manufacturing Systems",
      image: "/placeholder.svg",
    },
    {
      name: "Member 2",
      role: "Tech Lead",
      expertise: "Automation • Cloud Systems",
      image: "/placeholder.svg",
    },
    {
      name: "Member 3",
      role: "Product Engineer",
      expertise: "Analytics • Process Optimization",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="about" className="mb-32 relative z-10">
      <div className="w-full h-[1px] mt-28 mb-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="container mx-auto relative">
        {/* HEADER */}
        <div className="text-center">
          <div
            className="font-light font-bold text-center px-6 py-4 tracking-widest
            bg-white/10 backdrop-blur-xl border border-white/20
            rounded-full shadow-[0_0_25px_rgba(255,255,255,0.12)]
            text-2xl text-white mb-16"
          >
            ABOUT US
          </div>
          <h2 className="text-4xl md:text-4xl font-light font-sentient text-white leading-tight">
            Building Intelligence for
            <span className="text-primary font-medium"> Modern Manufacturing</span>
            </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center mt-6">
          {/* LEFT SIDE - TEXT */}

            <p className=" text-lg text-white/80 max-w-3xl mx-auto leading-relaxed bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                Bexor was created with a clear purpose — to make factories smarter, faster,
                and fully connected. We help manufacturers eliminate manual gaps, unify data,
                and shift from reactive decisions to intelligent, real-time operations.
                <br /><br />
                By combining industrial expertise with AI, automation, and analytics, we
                build systems that improve productivity, reduce downtime, and bring complete
                visibility to the shop floor. Every solution is engineered for precision,
                reliability, and long-term growth.
              </p>

         {/* RIGHT SIDE CAROUSEL */}
{/* RIGHT SIDE - FADE CAROUSEL */}
<div ref={teamRef} className="h-full">
  <div className="relative w-full h-full overflow-hidden rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.12)]">

    {teamMembers.map((member, idx) => (
      <motion.div
        key={idx}
        className="absolute inset-0"
        animate={{ opacity: currentIndex === idx ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover rounded-3xl"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-md rounded-b-3xl">
          <div className="text-white font-semibold">{member.name}</div>
          <div className="text-primary text-sm">{member.role}</div>
          <div className="text-white/70 text-xs">{member.expertise}</div>
        </div>
      </motion.div>
    ))}

  </div>
</div>



          
          </div>
        </div>

        {/* 3-PANEL DETAILS */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div className="p-10 bg-white/10 backdrop-blur-[2px] rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.12)]">
            <h3 className="text-2xl font-light mb-3 text-primary">Mission</h3>
            <p className="text-white/75">
              Deliver intelligent digital systems that eliminate manual
              bottlenecks, streamline workflows, and power data-driven
              manufacturing excellence.
            </p>
          </div>

          <div className="relative p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[2px] border border-white/20 rounded-[40px] shadow-[0_0_60px_rgba(255,255,255,0.18)]">
            <h3 className="text-2xl font-light mb-3 text-accent relative z-10">Vision</h3>
            <p className="text-white/75 relative z-10">
              Become the industrial nervous system — enabling factories to
              predict, decide, and operate autonomously with intelligent
              insights.
            </p>
          </div>

          <div className="p-10 bg-white/10 backdrop-blur-[2px] rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.12)]">
            <h3 className="text-2xl font-light mb-3 text-primary">Core Values</h3>
            <p className="text-white/75">
              Precision, Innovation, Trust. Every system we build is engineered
              for long-term reliability and scalable industrial growth.
            </p>
          </div>
        </div>

        
        {/* SLIDE ANIMATION */}
        <style>
          {`
            @keyframes slide {
              0% { transform: translateX(0%); }
              25% { transform: translateX(-100%); }
              50% { transform: translateX(-200%); }
              75% { transform: translateX(-300%); }
              100% { transform: translateX(0%); }
            }
            .animate-slide {
              animation: slide 12s infinite linear;
            }
          `}
        </style>
      </div>
    </section>
  );
}
