"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Pill } from "./pill";
import {
  Code2,
  Database,
  BarChart3,
  Zap,
  Brain,
  Settings,
} from "lucide-react";

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Custom Web Apps",
      description: "Tailored web applications built for manufacturing workflows",
      icon: Code2,
      details:
        "We build high-performance web applications specifically designed for manufacturing operations. From inventory systems to production scheduling tools, each app is engineered for workflow precision.",
    },
    {
      id: 2,
      title: "ERP Systems",
      description: "Full-scale ERP solutions for operational control",
      icon: Database,
      details:
        "Our ERP systems integrate production, inventory, finance, HR, supply chain, and more. Built to scale with your business and adapt to industry changes.",
    },
    {
      id: 3,
      title: "Data Analytics",
      description: "Turn raw data into actionable insights",
      icon: BarChart3,
      details:
        "We develop dashboards, real-time reporting, predictive analytics, and KPI systems designed for manufacturing optimization and cost reduction.",
    },
    {
      id: 4,
      title: "API Integration",
      description: "Connect manufacturing systems & services seamlessly",
      icon: Zap,
      details:
        "Integrate ERP, logistics, payment systems, IoT, cloud platforms, and third-party APIs. Achieve smooth data flow across your entire ecosystem.",
    },
    {
      id: 5,
      title: "ML & AI Models",
      description: "Automation powered by intelligent AI",
      icon: Brain,
      details:
        "Predict equipment failures, automate QC, optimize schedules, detect anomalies & more. Our AI models are built on manufacturing-driven datasets.",
    },
    {
      id: 6,
      title: "Custom Scripts",
      description: "Automation tools tailored to your needs",
      icon: Settings,
      details:
        "We build scripts for data migration, automation, reporting, batch processing, and workflow optimization, removing repetitive manual tasks.",
    },
  ];

  return (
    <section id="services" className="mb-16 relative z-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-3xl mb-6 text-white relative z-10">
            Comprehensive{" "}
            <span className="text-primary">Manufacturing Solutions</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-lg relative z-10">
            Click any service to learn how we can transform your manufacturing
            operations with modern digital systems.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className="
                  p-8 rounded-2xl text-left cursor-pointer group
                  bg-white/10 backdrop-blur-[2px]
                  border border-white/20
                  shadow-[0_0_25px_rgba(255,255,255,0.08)]
                  hover:bg-white/20 hover:border-primary/50
                  transition-all
                "
              >
                <div
                  className="
                    inline-block p-3 rounded-xl mb-4
                    bg-primary/10 group-hover:bg-primary/20
                    transition-colors
                  "
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </button>
            );
          })}
        </div>

        {/* Dialog */}
        <Dialog
          open={selectedService !== null}
          onOpenChange={() => setSelectedService(null)}
        >
          <DialogContent
            className="
              max-w-2xl
              bg-white/10 backdrop-blur-2xl
              border border-white/20
              text-white
              shadow-[0_0_40px_rgba(255,255,255,0.12)]
            "
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-white">
                {services.find((s) => s.id === selectedService)?.title}
              </DialogTitle>

              <DialogDescription className="text-base text-white/80 mt-4">
                {services.find((s) => s.id === selectedService)?.details}
              </DialogDescription>
            </DialogHeader>

            <div
              className="
                mt-6 p-4 rounded-xl
                bg-primary/10 border border-primary/30
              "
            >
              <p className="text-sm text-white/70">
                Ready to implement this solution? Our team will work closely
                with you to design a manufacturing-grade, production-tested
                system tailored to your requirements.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
