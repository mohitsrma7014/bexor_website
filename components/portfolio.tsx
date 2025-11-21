"use client";

import { useState } from "react";
import { Pill } from "./pill";
import { X } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      title: "Manufacturing ERP System",
      company: "Global Steel Industries",
      short: "Complete ERP system for end-to-end manufacturing operations.",
      long: `
• Developed full ERP including RM, WIP, FG, QC & dispatch modules  
• Improved process efficiency by 42%  
• Integrated barcode/QR workflows  
• Automated planning & scheduling  
• Live machine-level dashboards  
      `,
      stack: ["Django", "PostgreSQL", "React", "Tailwind", "Redis"],
    },
    {
      title: "Predictive Maintenance Dashboard",
      company: "Precision Electronics Ltd",
      short: "ML model for predicting machine downtime using live sensor data.",
      long: `
• Built real-time monitoring dashboard  
• ML model predicted failures with 89% accuracy  
• Reduced unplanned downtime by 27%  
• Integrated IoT MQTT stream  
      `,
      stack: ["Python", "TensorFlow", "FastAPI", "MQTT", "React"],
    },
    {
      title: "Inventory Automation System",
      company: "Advanced Manufacturing Co",
      short: "Automation scripts reduced manual QC inspection time by 60%.",
      long: `
• Automated QC checks  
• Designed FIFO-based RM tracking  
• Implemented 3-level approval workflow  
• Email + WhatsApp notifications  
      `,
      stack: ["Node.js", "MongoDB", "React", "Express"],
    },
    {
      title: "Supplier Portal",
      company: "AutoTech Solutions",
      short: "Modern supplier onboarding + order tracking portal.",
      long: `
• Supplier onboarding workflow  
• Auto PO generation  
• API integration with SAP  
• Role-based access & audit logs  
      `,
      stack: ["Laravel", "MySQL", "React"],
    },
    {
      title: "Production Metrics Dashboard",
      company: "Quality Components Inc",
      short: "Live production visualization with KPIs & hourly reporting.",
      long: `
• Machine-level KPIs  
• Automated hourly reporting  
• Custom-built charting components  
• Optimized for 65-inch factory displays  
      `,
      stack: ["Django", "React", "PostgreSQL", "WebSockets"],
    },
    {
      title: "API Integration Hub",
      company: "Industrial Systems Group",
      short: "Unified API hub connecting multiple legacy systems.",
      long: `
• Connected 7 legacy systems  
• Built scalable API gateway  
• Reduced reconciliation time by 70%  
• Token-based secure access  
      `,
      stack: ["FastAPI", "Redis", "PostgreSQL", "React"],
    },
  ];

  const [active, setActive] = useState<any>(null);

  return (
    <section
      id="portfolio"
      className=" bg-gradient-to-b  relative z-10"
    >
      <div className="container mx-auto p-8 rounded-2xl text-left cursor-pointer group
                  bg-white/10 backdrop-blur-[2px]
                  border border-white/20
                  shadow-[0_0_25px_rgba(255,255,255,0.08)]
                   max-w-7xl">
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Work Showcase</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our successful implementations across industries.
            Click any project to view full details.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div
              key={idx}
              onClick={() => setActive(p)}
              className=" p-8 rounded-2xl text-left cursor-pointer group
                  bg-white/10 backdrop-blur-[2px]
                  border border-white/20
                  shadow-[0_0_25px_rgba(255,255,255,0.08)]
                  hover:bg-white/20 hover:border-primary/50
                  transition-all"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {p.title}
              </h3>

              <p className="text-primary font-mono text-xs mb-2">
                {p.company}
              </p>

              <p className="text-muted-foreground text-sm">{p.short}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {active && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setActive(null)}
          >
            <div
              className="bg-black rounded-xl p-8 max-w-lg w-full border border-border relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                onClick={() => setActive(null)}
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {active.title}
              </h3>

              <p className="text-primary text-sm font-mono mb-4">
                {active.company}
              </p>

              <pre className="whitespace-pre-wrap text-sm text-foreground leading-relaxed mb-6">
                {active.long}
              </pre>

              <div className="flex flex-wrap gap-2">
                {active.stack.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
