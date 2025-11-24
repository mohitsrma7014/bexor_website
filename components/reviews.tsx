"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      company: "CAD SET GO PVT. LTD.",
      name: "Chandresh Gaur",
      role: "CEO",
      content:
        "Bexor transformed our manufacturing operations completely. Their ERP system reduced our production cycle time by 35% and improved inventory accuracy to 99.8%.",
      rating: 5,
    },
    
  ];

  const trackRef = useRef<HTMLDivElement>(null);

  // AUTO SLIDE
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let current = 0;

    const slide = () => {
      current = (current + 1) % reviews.length;
      track.style.transform = `translateX(-${current * 100}%)`;
    };

    const interval = setInterval(slide, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reviews"
      className="mb-16  relative z-10"
    >
      <div
          className="
            w-full h-[1px] mt-28 mb-20 
            bg-gradient-to-r 
            from-transparent via-white/30 to-transparent
          "
        ></div>

      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
        

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Trusted by{" "}
            <span className="text-primary">Leading Manufacturers</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Hear from organizations that rely on our solutions every day.
          </p>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden relative max-w-2xl mx-auto">
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-out"
          >
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="min-w-full bg-card-bg/40 backdrop-blur-md border border-border/40 rounded-xl p-8 mx-2"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-white/80 text-base leading-relaxed mb-6 pr-8">
                  "{review.content}"
                </p>

                {/* Footer */}
                <div className="border-t border-border/40 pt-4">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-primary text-xs font-mono">{review.role}</p>
                  <p className="text-white/50 text-xs">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
