"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function About() {
  // Refs for animation triggers
  const timelineRef = useRef(null);
  const teamRef = useRef(null);

  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });

  const founderJourney = [
    {
      year: "2023",
      title: "Vision Conception",
      description:
        "Identified critical gaps in manufacturing digitalization during industry research",
      icon: "💡",
    },
    {
      year: "2024 Q1",
      title: "Core Team Formation",
      description:
        "Experts in AI, industrial engineering, and enterprise systems came together",
      icon: "👥",
    },
    {
      year: "2024 Q2",
      title: "Prototype Development",
      description:
        "Built first MVP integrating ERP analytics with production control systems",
      icon: "🚀",
    },
    {
      year: "2024 Q3",
      title: "Early Adoption",
      description:
        "Deployed solutions for pilot manufacturing partners with remarkable results",
      icon: "🏭",
    },
    {
      year: "Now",
      title: "Scale & Innovate",
      description:
        "Expanding platform capabilities and onboarding new industrial partners",
      icon: "📈",
    },
  ];

  const teamMembers = [
    {
      name: "Mohit Sharma",
      role: "Founder & CEO",
      expertise: "Industrial AI, Enterprise Systems",
      avatar: "👨‍💼",
    },
   
  ];

  return (
    <section
      id="about"
      className="
       mb-16  relative z-10
      "
    >
      <div
          className="
            w-full h-[1px] mt-28 mb-20 
            bg-gradient-to-r 
            from-transparent via-white/30 to-transparent
          "
        ></div>

      <div className="container mx-auto relative">
        {/* HEADER */}
        <div className="text-center">
          <div
            className="font-light font-bold 
            text-center  px-6 py-4 tracking-widest
              bg-white/10 backdrop-blur-xl 
              border border-white/20
              rounded-full shadow-[0_0_25px_rgba(255,255,255,0.12)] text-2xl md:text-2xl font-bold mb-6 text-white relative z-10 mb-16
            "
          >
            ABOUT US
          </div>

          <h2
            className="
              text-4xl md:text-4xl 
              font-light font-sentient 
              text-white leading-tight
            "
          >
            Building Intelligence for  
            <span className="text-primary font-medium">
              {" "}
              Modern Manufacturing
            </span>
          </h2>

          <p
            className="
              mt-6 text-lg 
              text-white/80
              max-w-3xl mx-auto 
              leading-relaxed
            "
          >
            We create precision-engineered digital ecosystems for factories —
            connecting ERP, PPC, automation, analytics, and AI with real-world
            manufacturing processes.
          </p>
        </div>

        {/* 3-PANEL LIQUID GLASS */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <div
            className="
              p-10 bg-white/10 backdrop-blur-[2px]
              rounded-3xl border border-white/20
              shadow-[0_0_40px_rgba(255,255,255,0.12)]
            "
          >
            <h3 className="text-2xl font-light mb-3 text-primary">Mission</h3>
            <p className="text-white/75">
              Empower manufacturers with intelligent digital systems that remove
              manual effort, connect workflows, and automate operations.
            </p>
          </div>

          <div
            className="
              relative p-12 bg-gradient-to-br from-white/10 to-white/5
              backdrop-blur-[2px] border border-white/20
              rounded-[40px]
              shadow-[0_0_60px_rgba(255,255,255,0.18)]
            "
          >
            <h3 className="text-2xl font-light mb-3 text-accent relative z-10">
              Vision
            </h3>
            <p className="text-white/75 relative z-10">
              Become the digital backbone for modern industry — enabling
              realtime intelligence & automated decision systems.
            </p>
          </div>

          <div
            className="
              p-10 bg-white/10 backdrop-blur-[2px]
              rounded-3xl border border-white/20
              shadow-[0_0_40px_rgba(255,255,255,0.12)]
            "
          >
            <h3 className="text-2xl font-light mb-3 text-primary">
              Core Values
            </h3>
            <p className="text-white/75">
              Precision, Innovation, Transparency — every system is engineered
              for reliability & scalable industrial growth.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="
            w-full h-[1px] mt-28 mb-20 
            bg-gradient-to-r 
            from-transparent via-white/30 to-transparent
          "
        ></div>

        {/* FOUNDER TIMELINE */}
        <h3
          className="
           font-light font-bold 
            text-center  px-6 py-4 tracking-widest
              bg-white/10 backdrop-blur-xl 
              border border-white/20
              rounded-full shadow-[0_0_25px_rgba(255,255,255,0.12)] text-2xl md:text-2xl font-bold mb-6 text-white relative z-10 mb-16
          "
        >
          Founder Journey
        </h3>

        <div
          ref={timelineRef}
          className="relative max-w-2xl mx-auto border-l border-white/20 p-10 bg-white/10 backdrop-blur-[2px]
              rounded-3xl border border-white/20
              shadow-[0_0_40px_rgba(255,255,255,0.12)]"
        >
          {founderJourney.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              animate={
                timelineInView
                  ? { opacity: 1, x: 0, transition: { delay: index * 0.25 } }
                  : {}
              }
              className="mb-12 relative"
            >
              {/* DOT */}
              <div
                className="
                  absolute -left-[26px] top-[6px]
                  w-2 h-2 rounded-full
                  bg-white
                "
              ></div>

              <div className="text-xl text-primary font-semibold">
                 {step.year}
              </div>
              <div className="text-white/90 text-lg mt-1">{step.title}</div>
              <p className="text-white/60 mt-1">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* DIVIDER */}
        <div
          className="
            w-full h-[1px] mt-28 mb-20 
            bg-gradient-to-r 
            from-transparent via-white/30 to-transparent
          "
        ></div>

        {/* TEAM SECTION */}
        <h3
          className="
             font-light font-bold 
            text-center  px-6 py-4 tracking-widest
              bg-white/10 backdrop-blur-xl 
              border border-white/20
              rounded-full shadow-[0_0_25px_rgba(255,255,255,0.12)] text-2xl md:text-2xl font-bold mb-6 text-white relative z-10 mb-16
          "
        >
          Our Team
        </h3>

        <div
          ref={teamRef}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={
                teamInView
                  ? { opacity: 1, y: 0, transition: { delay: index * 0.25 } }
                  : {}
              }
              className="
                p-8 
                bg-white/10 backdrop-blur-[2px]
                border border-white/20
                rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.14)]
                text-center
              "
            >
              <div className="text-5xl mb-3">{member.avatar}</div>
              <div className="text-lg text-white font-medium">
                {member.name}
              </div>
              <div className="text-primary text-sm mt-1">{member.role}</div>
              <p className="text-white/60 text-sm mt-2">
                {member.expertise}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
