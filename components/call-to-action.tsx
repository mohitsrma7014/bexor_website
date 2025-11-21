"use client";

import { Button } from "./ui/button";
import { ArrowRight, Factory, Gauge, Cpu } from "lucide-react";

export function CallToAction() {
  return (
    <section
      id="contact"
      className="
        relative overflow-hidden mb-16
      "
    >
      <div
          className="
            w-full h-[1px] mt-28 mb-20 
            bg-gradient-to-r 
            from-transparent via-white/30 to-transparent
          "
        ></div>

      {/* Soft Glow */}
      <div className="absolute " />

      <div className="container mx-auto p-8 rounded-2xl text-center cursor-pointer group
                  bg-white/10 backdrop-blur-[2px]
                  border border-white/20
                  shadow-[0_0_25px_rgba(255,255,255,0.08)]
                   max-w-7xl">
        
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Let’s Build Your{" "}
          <span className="text-primary">Next Manufacturing Solution</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
          Whether you're improving an existing workflow or starting from scratch,
          we help you design practical, efficient, and scalable digital solutions
          tailored for real manufacturing needs.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-base"
            onClick={() => {
              const section = document.getElementById("contact-us");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="text-base"
            onClick={() => {
              const section = document.getElementById("portfolio");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Our Work
          </Button>
        </div>

        {/* REALISTIC STARTUP STATS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">Growing</div>
            <p className="text-muted-foreground text-sm">
              Onboarding new manufacturing clients every month
            </p>
          </div>

          <div className="p-4 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">Reliable</div>
            <p className="text-muted-foreground text-sm">
              Focused on long-term partnerships, not one-time projects
            </p>
          </div>

          <div className="p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">Specialized</div>
            <p className="text-muted-foreground text-sm">
              Tailored solutions built only for industrial & manufacturing teams
            </p>
          </div>
        </div>

        {/* EXTRA HIGHLIGHTS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-6 border border-border rounded-xl hover:border-primary transition-all">
            <Factory className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Built for Real Factories
            </h4>
            <p className="text-muted-foreground text-sm">
              We work directly with manufacturing teams to solve practical,
              everyday workflow and production challenges.
            </p>
          </div>

          <div className="bg-card p-6 border border-border rounded-xl hover:border-primary transition-all">
            <Gauge className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Focus on Efficiency
            </h4>
            <p className="text-muted-foreground text-sm">
              We optimize processes with automation, dashboards, and simple,
              reliable tools that teams love using.
            </p>
          </div>

          <div className="bg-card p-6 border border-border rounded-xl hover:border-primary transition-all">
            <Cpu className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Technology That Scales
            </h4>
            <p className="text-muted-foreground text-sm">
              From basic tracking systems to AI-powered analytics — we build for
              the present and prepare for the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
