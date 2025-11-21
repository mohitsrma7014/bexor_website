'use client'

import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Portfolio } from "@/components/portfolio";
import { Reviews } from "@/components/reviews";
import { CallToAction } from "@/components/call-to-action";
import  ContactUs  from "@/components/ContactUs";

import { Footer } from "@/components/footer";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <CallToAction />
      <Portfolio />
      <ContactUs />
      <Footer />
      <Leva hidden />
    </>
  );
}
