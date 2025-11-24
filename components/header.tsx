"use client"

import type React from "react"

import Link from "next/link"
import { Logo } from "./logo"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  const navItems = ["Home", "About", "Services", "Contact"]
  //  "Reviews","Portfolio", 

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("/#")) {
      e.preventDefault()
      const id = href.slice(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="fixed z-50 pt-8 md:pt-5 top-0 left-0 w-full px-4 md:px-8 font-inter">
      <header className="flex items-center justify-between container">
        {/* LOGO */}
        <Link href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </Link>

        {/* NAV WITH PREMIUM GLASS */}
        <nav
          className="
            flex max-lg:hidden absolute left-1/2 -translate-x-1/2 
            items-center justify-center gap-x-10 px-5 py-3
            bg-white/10 backdrop-blur-sm rounded-4xl 
            border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.08)]
          "
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="
                uppercase tracking-tight font-small text-sm
                text-white/70 hover:text-white
                transition-all duration-300 cursor-pointer
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* METALLIC SUNBURST BUTTON */}
        <a
          href="#contact"
          onClick={handleNavClick}
          className="
            max-lg:hidden uppercase tracking-wide font-normal text-base
            px-6 py-2.5 rounded-4xl relative overflow-hidden
            text-white/70 border border-white/20
            transition-all duration-300
            hover:scale-[1.06]
            hover:shadow-[0_0_28px_rgba(240,248,255)]
            cursor-pointer
          "
        >
          {/* Sunburst Reflection Overlay */}
          <span
            className="
            absolute inset-0 
            bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.35),transparent_60%)]
            pointer-events-none
          "
          ></span>
          Get Started
        </a>

        <MobileMenu navItems={navItems} onNavClick={handleNavClick} />
      </header>
    </div>
  )
}
