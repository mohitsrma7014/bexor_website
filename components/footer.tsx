"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-background/80 border-t border-border backdrop-blur-xl">
      <div className="container mx-auto py-14 md:py-20">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* LOGO + TEXT */}
          <div>
            <Logo className="w-24 mb-5" />
            <p className="text-foreground/60 text-sm leading-relaxed">
              Engineering digital solutions that empower manufacturing
              companies with speed, accuracy, and intelligence.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <Link href="/" className="p-2 rounded-md hover:bg-primary/10 transition">
                <Facebook className="w-5 h-5 text-primary" />
              </Link>
              <Link href="/" className="p-2 rounded-md hover:bg-primary/10 transition">
                <Instagram className="w-5 h-5 text-primary" />
              </Link>
              <Link href="/" className="p-2 rounded-md hover:bg-primary/10 transition">
                <Linkedin className="w-5 h-5 text-primary" />
              </Link>
              <Link href="/" className="p-2 rounded-md hover:bg-primary/10 transition">
                <Youtube className="w-5 h-5 text-primary" />
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="text-foreground/60 hover:text-primary text-sm transition">Custom Web Apps</Link></li>
              <li><Link href="/#services" className="text-foreground/60 hover:text-primary text-sm transition">ERP Development</Link></li>
              <li><Link href="/#services" className="text-foreground/60 hover:text-primary text-sm transition">Automation Solutions</Link></li>
              <li><Link href="/#services" className="text-foreground/60 hover:text-primary text-sm transition">Data Intelligence</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-foreground/60 hover:text-primary text-sm transition">About Us</Link></li>
              <li><Link href="/#portfolio" className="text-foreground/60 hover:text-primary text-sm transition">Portfolio</Link></li>
              <li><Link href="/#reviews" className="text-foreground/60 hover:text-primary text-sm transition">Client Reviews</Link></li>
              <li><Link href="/#team" className="text-foreground/60 hover:text-primary text-sm transition">Team</Link></li>
              <li><Link href="/#contact" className="text-foreground/60 hover:text-primary text-sm transition">Contact</Link></li>
            </ul>
          </div>

          {/* CONTACT SECTION */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider">Contact</h4>

            <ul className="space-y-4 text-sm text-foreground/70">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                support@yourcompany.com
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                +91 98765 43210
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                Mumbai, Maharashtra, India
              </li>
            </ul>

            {/* NEWSLETTER */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2 text-foreground/80">Subscribe for updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="
                    w-full px-4 py-2 
                    rounded-lg border border-border 
                    bg-background/70 text-sm 
                    focus:ring-2 focus:ring-primary transition
                  "
                />
                <Button size="sm">Join</Button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© 2025 Your Company. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-primary transition">Privacy</Link>
            <Link href="/" className="hover:text-primary transition">Terms</Link>
            <Link href="/" className="hover:text-primary transition">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
