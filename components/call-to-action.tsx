"use client";

import { Button } from "./ui/button";
import { ArrowRight, Factory, Gauge, Cpu } from "lucide-react";

export function CallToAction() {
  return (
    <section
      id="contact"
      className="
        py-20 md:py-32 
        bg-gradient-to-r from-primary/10 to-secondary/10 
        border-y border-border 
        relative overflow-hidden
      "
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto text-center relative">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Ready to Transform Your{" "}
          <span className="text-primary">Manufacturing Business?</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-10">
          Let’s discuss your challenges and build a custom solution that drives
          efficiency, automation, and real business results.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button size="lg" variant="outline" className="text-base">
            View Case Studies
          </Button>
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground text-sm">
              Manufacturing Partners
            </p>
          </div>

          <div className="p-4 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-2">100+</div>
            <p className="text-muted-foreground text-sm">
              Successful Projects Delivered
            </p>
          </div>

          <div className="p-4 rounded-lg">
            <div className="text-3xl font-bold text-primary mb-2">5+ Years</div>
            <p className="text-muted-foreground text-sm">
              Industry-Focused Expertise
            </p>
          </div>
        </div>

        {/* EXTRA SECTION (NEWLY ADDED) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-6 border border-border rounded-xl hover:border-primary transition-all">
            <Factory className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Industry Driven
            </h4>
            <p className="text-muted-foreground text-sm">
              Solutions tailored specifically for manufacturing, machining, and
              fabrication industries.
            </p>
          </div>

          <div className="bg-card p-6 border border-border rounded-xl hover:border-primary transition-all">
            <Gauge className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Performance Focused
            </h4>
            <p className="text-muted-foreground text-sm">
              High-speed dashboards, real-time tracking, and optimized workflows
              built for efficiency.
            </p>
          </div>

          <div className="bg-card p-6 border border-border rounded-xl hover:border-primary transition-all">
            <Cpu className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Future Ready
            </h4>
            <p className="text-muted-foreground text-sm">
              AI, ML, automation, and scalable cloud systems designed for the
              next generation of factories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
