"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "#about-me" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Frontend Development",
  "Backend Development",
  "API Integration",
  "UI/UX Design",
  "DevOps & Cloud",
  "AI Integration"
];

const socialLinks = [
  { name: "GitHub", icon: "/gitwhite.png", href: "https://github.com/Yasalkhan99" },
  { name: "LinkedIn", icon: "/linkedin.svg", href: "https://www.linkedin.com/in/yasal-khan-3b9048b7/" },
  { name: "Instagram", icon: "/instagram.svg", href: "https://instagram.com" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [waMsg, setWaMsg] = useState("");
  const waNumber = "923150214059";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsg)}`;

  useEffect(() => {
    function updateFooterTime() {
      const now = new Date();
      // Karachi is UTC+5
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const karachi = new Date(utc + 5 * 3600000);
      const h = karachi.getHours().toString().padStart(2, '0');
      const m = karachi.getMinutes().toString().padStart(2, '0');
      const el = document.getElementById('footer-time');
      if (el) el.textContent = `${h}:${m}`;
    }
    updateFooterTime();
    const interval = setInterval(updateFooterTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-gray-800 pt-4 pb-2 bg-transparent font-poppins text-[13px] relative">
      {/* Top-right utility bar */}
      <div className="absolute right-2 top-2 flex items-center gap-2 z-10 md:static md:justify-end md:mb-2 w-full md:w-auto justify-center">
        {/* Download CV */}
        <a
          href="/Yasal_Khan_CV.pdf"
          download
          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-r from-cyan-500/80 to-blue-500/80 text-white text-[11px] font-semibold shadow hover:from-cyan-400 hover:to-blue-400 transition-all border border-cyan-400/30"
          title="Download CV"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
          </svg>
          CV
        </a>
        {/* Theme Toggle */}
        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              const isDark = document.documentElement.classList.toggle('dark');
              window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
            }
          }}
          className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-600 bg-black/60 hover:bg-cyan-900/30 transition text-cyan-300"
          title="Toggle theme"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71" />
            <circle cx="12" cy="12" r="5" />
          </svg>
        </button>
        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-7 h-7 flex items-center justify-center rounded-full border border-cyan-400/30 bg-black/60 hover:bg-cyan-900/30 transition text-cyan-300"
          title="Back to Top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        {/* Live Status */}
        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-400/30 text-green-400 text-[11px] font-semibold">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for Freelance
        </span>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-4 px-2">
        {/* Main Columns */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4 md:gap-0">
          {/* Column 1: Logo + Tagline + Socials */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-2 md:gap-2 mb-3 md:mb-0">
            <div className="flex items-center gap-1">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-cyan-400/40 shadow overflow-hidden">
                <Image src="/pic1.svg" alt="YKCODES Logo" width={26} height={26} className="rounded-full object-cover" />
              </span>
              <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-white tracking-widest font-poppins">YKCODES</span>
            </div>
            <span className="text-[10px] text-slate-400 font-semibold tracking-wide mt-0 mb-1 font-poppins">Code. Create. Inspire.</span>
            <div className="flex gap-2 mt-0.5">
              {socialLinks.map(social => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.13, rotate: -8 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group rounded-full p-0.5 bg-black/30 border border-cyan-400/10 shadow hover:shadow-cyan-400/20 transition-all duration-300`}
                >
                  {social.name === 'LinkedIn' ? (
                    <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 text-cyan-300 hover:text-cyan-400">
                      <path d="M27 0H5C2.2 0 0 2.2 0 5v22c0 2.8 2.2 5 5 5h22c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM9.4 27H5.6V12.1h3.8V27zm-1.9-17c-1.2 0-2.1-1-2.1-2.1 0-1.2 1-2.1 2.1-2.1s2.1 1 2.1 2.1c0 1.1-.9 2.1-2.1 2.1zm19.5 17h-3.8v-7.2c0-1.7-.6-2.8-2.1-2.8-1.1 0-1.7.7-2 1.4-.1.3-.1.7-.1 1.1V27h-3.8s.1-12.5 0-13.9h3.8v2c.5-.8 1.4-2 3.5-2 2.6 0 4.5 1.7 4.5 5.3V27z"/>
                    </svg>
                  ) : (
                    <Image src={social.icon} alt={social.name} width={14} height={14} className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_cyan] transition-transform" />
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-gradient-to-b from-cyan-400/10 via-slate-400/10 to-transparent mx-2" />

          {/* Column 2: Quick Links */}
          <nav className="flex-1 flex flex-col items-center md:items-start gap-0.5 mb-3 md:mb-0">
            <span className="text-[9px] text-slate-400 mb-0.5 tracking-wider uppercase font-semibold font-poppins">Quick Links</span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1">
              {quickLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] text-slate-200 hover:text-cyan-300 transition-colors font-medium tracking-wide px-1.5 py-0.5 rounded-full bg-cyan-900/20 border border-cyan-400/10 hover:bg-cyan-400/20 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 font-poppins"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gradient-to-b from-cyan-400/10 via-slate-400/10 to-transparent mx-2" />

          {/* Column 3: Services */}
          <nav className="flex-1 flex flex-col items-center md:items-start gap-0.5">
            <span className="text-[9px] text-slate-400 mb-0.5 tracking-wider uppercase font-semibold font-poppins">Services</span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1">
              {services.map(service => (
                <span
                  key={service}
                  className="text-[10px] text-slate-200 font-medium tracking-wide px-1.5 py-0.5 rounded-full bg-slate-800/40 border border-slate-700/30 font-poppins"
                >
                  {service}
                </span>
              ))}
            </div>
          </nav>
        </div>

        {/* Contact Actions Row */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 mt-2">
          {/* WhatsApp Message Box */}
          <form
            onSubmit={e => { e.preventDefault(); window.open(waLink, "_blank"); }}
            className="w-full max-w-xs bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-cyan-900/30 border border-cyan-400/10 rounded-xl shadow p-2 flex flex-col gap-1 backdrop-blur-xl"
          >
            <label className="text-[10px] text-slate-400 mb-0.5 font-semibold">Send a quick message on WhatsApp</label>
            <div className="flex gap-1">
              <input
                type="text"
                value={waMsg}
                onChange={e => setWaMsg(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-2 py-1 rounded-lg bg-black/40 border border-cyan-400/10 text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 text-[12px]"
              />
              <button
                type="submit"
                className="px-2 py-1 rounded-lg bg-gradient-to-r from-green-500 via-green-400 to-cyan-400 text-white font-bold shadow hover:from-green-400 hover:to-cyan-300 transition-all"
                title="Send WhatsApp Message"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.29A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.29 1.37 1.4-4.18-.25-.4A10.47 10.47 0 015.5 15c0-5.799 4.701-10.5 10.5-10.5S26.5 9.201 26.5 15 21.799 25.5 16 25.5zm5.07-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
              </button>
            </div>
          </form>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/923150214059"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 rounded-xl bg-gradient-to-r from-green-500/80 via-green-400/80 to-cyan-400/80 border border-green-300/20 shadow text-white font-semibold text-[11px] hover:scale-105 transition-all"
          >
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.34 7.09L4 29l7.18-2.29A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.5c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.29 1.37 1.4-4.18-.25-.4A10.47 10.47 0 015.5 15c0-5.799 4.701-10.5 10.5-10.5S26.5 9.201 26.5 15 21.799 25.5 16 25.5zm5.07-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.06.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
            </svg>
            WhatsApp
          </a>
          {/* Email Card */}
          <a
            href="mailto:yasalkhan90@gmail.com"
            className="flex items-center gap-1 px-2 py-1 rounded-xl bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-cyan-400/80 border border-blue-300/20 shadow text-white font-semibold text-[11px] hover:scale-105 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-cyan-200"><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
            Email
          </a>
        </div>

        {/* Compact Extras Row */}
        <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-between gap-2 mt-2 text-[11px]">
          {/* Mini Portfolio Stats */}
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-semibold">10+ Projects</span>
            <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 font-semibold">5 Years Exp</span>
            <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 font-semibold">100% Satisfaction</span>
          </div>
          {/* Mini Tech Stack Row */}
          <div className="flex items-center gap-1">
            <Image src="/react.png" alt="React" width={14} height={14} />
            <Image src="/next.png" alt="Next.js" width={14} height={14} />
            <Image src="/node-js.png" alt="Node.js" width={14} height={14} />
            <Image src="/ts.png" alt="TypeScript" width={14} height={14} />
            <Image src="/tailwind.png" alt="Tailwind" width={14} height={14} />
          </div>
          {/* Rotating Testimonial/Quote */}
          <div className="flex items-center gap-1 italic text-slate-400 min-w-[120px]">
            <svg className="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17a4 4 0 01-4-4V7a4 4 0 014-4h1" /><path d="M15 17a4 4 0 004-4V7a4 4 0 00-4-4h-1" /></svg>
            <span>“Yasal is a true professional!”</span>
          </div>
          {/* Mini Awards/Certifications */}
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33-3.87-3.77 5.34-.78L10 2z" /></svg>
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" /></svg>
          </div>
          {/* Current Local Time */}
          <span className="px-2 py-0.5 rounded bg-slate-700/30 text-slate-200 font-semibold" id="footer-localtime">Karachi, PK — <span id="footer-time">--:--</span></span>
          {/* Privacy/Terms Links */}
          <div className="flex items-center gap-2">
            <a href="/privacy-policy" className="hover:underline text-slate-400">Privacy</a>
            <a href="/terms" className="hover:underline text-slate-400">Terms</a>
          </div>
          {/* Built With */}
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with</span>
            <Image src="/next.png" alt="Next.js" width={13} height={13} />
            <Image src="/tailwind.png" alt="Tailwind" width={13} height={13} />
          </div>
          {/* Accessibility Toggle */}
          <button
            onClick={() => {
              document.body.classList.toggle('text-[15px]');
              document.body.classList.toggle('contrast-150');
            }}
            className="px-2 py-0.5 rounded bg-slate-700/30 text-slate-200 hover:bg-cyan-400/20 border border-slate-500/20"
            title="Accessibility: Increase font/contrast"
          >
            A+
          </button>
          {/* Roadmap/Changelog Link */}
          <a href="#roadmap" className="px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 font-semibold">Roadmap</a>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-4 text-center text-[11px] text-slate-400/80 tracking-wide">
        <span className="font-semibold text-cyan-300">© {currentYear} Yasal Khan</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;