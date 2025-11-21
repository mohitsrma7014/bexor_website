"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Message Sent Successfully!");
    }, 1200);
  };

  return (
    <section
      id="contact-us"
      className="
 
        bg-gradient-to-b 
        from-background 
        via-background/40 
        to-background
        border-y border-border mb-16
      "
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-primary">Connect</span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions, ideas, or a project in mind? We're here to help.  
          Reach out and we’ll get back to you shortly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CONTACT DETAILS PANEL */}
          <div className=" p-8 rounded-2xl text-left cursor-pointer group
                  bg-white/10 backdrop-blur-[2px]
                  border border-white/20
                  shadow-[0_0_25px_rgba(255,255,255,0.08)]
                  hover:bg-white/20 hover:border-primary/50
                  transition-all">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-foreground/80">+91 70140 28949</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <p className="text-foreground/80">mohitsharma@bexor.in</p>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-foreground/80">
                  Ramgarh Alwar, Rajasthan(India, 301026)
                </p>
              </div>
            </div>

            <div className="mt-10">
              <iframe
                className="rounded-xl border border-border w-full h-64"
src="https://maps.google.com/maps?q=Ramgarh%20Alwar%20Rajasthan%20301026&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className=" p-8 rounded-2xl text-left cursor-pointer group
                  bg-white/10 backdrop-blur-[2px]
                  border border-white/20
                  shadow-[0_0_25px_rgba(255,255,255,0.08)]
                  hover:bg-white/20 hover:border-primary/50
                  transition-all"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium">Your Name</label>
                <input
                  required
                  type="text"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-background/80 border border-border focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-background/80 border border-border focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone (Optional)</label>
                <input
                  type="text"
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-background/80 border border-border focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-background/80 border border-border focus:ring-2 focus:ring-primary transition"
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full text-base flex items-center justify-center"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send className="w-5 h-5 ml-2" />}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
