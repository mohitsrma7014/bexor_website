"use client";

import { Pill } from "./pill";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      company: "AutoTech Solutions",
      name: "Vikram Sharma",
      role: "Operations Director",
      content:
        "Bexor transformed our manufacturing operations completely. Their ERP system reduced our production cycle time by 35% and improved inventory accuracy to 99.8%.",
      rating: 5,
    },
    {
      company: "Global Steel Industries",
      name: "Maria Rodriguez",
      role: "Plant Manager",
      content:
        "The custom web app Bexor built for us streamlined our daily workflows significantly. Support team is responsive and truly understands manufacturing challenges.",
      rating: 5,
    },
    {
      company: "Precision Electronics Ltd",
      name: "James Chen",
      role: "CTO",
      content:
        "Their data analytics dashboard gives us real-time visibility into production metrics. The predictive maintenance ML model has saved us thousands in unplanned downtime.",
      rating: 5,
    },
    {
      company: "Advanced Manufacturing Co",
      name: "Sarah Johnson",
      role: "Supply Chain Director",
      content:
        "API integrations Bexor implemented connected all our disparate systems seamlessly. Incredible ROI and their team went above and beyond to ensure smooth integration.",
      rating: 5,
    },
    {
      company: "Quality Components Inc",
      name: "Rajesh Verma",
      role: "Manufacturing Engineer",
      content:
        "Custom scripts they developed automated our quality checks. It's reduced manual inspection time by 60% and improved consistency. Highly recommend!",
      rating: 5,
    },
    {
      company: "Industrial Systems Group",
      name: "Emma Williams",
      role: "CEO",
      content:
        "Working with Bexor felt like partnering with an extension of our team. Their solutions are scalable, reliable, and they truly care about our success.",
      rating: 5,
    },
  ];

  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-b from-background/70 via-background/60 to-background/70 relative z-10"
    >
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-light font-bold 
            text-center  px-6 py-4 tracking-widest
              bg-white/10 backdrop-blur-xl 
              border border-white/20
              rounded-full shadow-[0_0_25px_rgba(255,255,255,0.12)] text-2xl md:text-2xl font-bold mb-6 text-white relative z-10 mb-16">CLIENT TESTIMONIALS</h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
            Trusted by{" "}
            <span className="text-primary">Leading Manufacturers</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-lg relative z-10">
            Feedback from organizations that rely on our technology every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-card-bg/40 backdrop-blur-md border border-border/50 rounded-lg p-6 
              hover:border-primary/60 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/80 text-sm leading-relaxed mb-4 min-h-[100px]">
                "{review.content}"
              </p>

              {/* Footer */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-bold text-sm text-white">{review.name}</p>
                <p className="text-primary text-xs font-mono mb-1">
                  {review.role}
                </p>
                <p className="text-white/50 text-xs">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
