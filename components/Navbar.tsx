"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const navItems = [
  { id: "about-me", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { name: "GitHub", icon: FaGithub, link: "https://github.com/Yasalkhan99" },
  { name: "Instagram", icon: FaInstagram, link: "https://instagram.com" },
  { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/yasal-khan-3b9048b7/" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInverted, setIsInverted] = useState(false);
  const [theme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'dark' || stored === 'light') return stored;
      // Auto-detect system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
      return 'light';
    }
    return 'light';
  });
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => (window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleClick(e: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => (window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('invert-theme') === 'on') {
        document.documentElement.classList.add('invert-theme');
        setIsInverted(true);
      } else {
        setIsInverted(false);
      }
      setIsInverted(document.documentElement.classList.contains('invert-theme'));
    }
  }, []);

  // Scroll to top on logo click
  // const handleLogoClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // Invert theme toggle logic
  const toggleInvertTheme = () => {
    const el = document.documentElement;
    if (el.classList.contains('invert-theme')) {
      el.classList.remove('invert-theme');
      window.localStorage.setItem('invert-theme', 'off');
      setIsInverted(false);
    } else {
      el.classList.add('invert-theme');
      window.localStorage.setItem('invert-theme', 'on');
      setIsInverted(true);
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1, scale: 0.8 }}
      transition={{ duration: 0.7, type: 'spring', stiffness: 80, damping: 18 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
    >
      {/* Moving neon blue gradient bar at the bottom */}
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-[2.5px] bg-gradient-to-r from-cyan-400/0 via-cyan-300 to-cyan-400/0 pointer-events-none"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        style={{ zIndex: 100 }}
      />
      <div className="w-full flex items-center justify-between px-3 py-1.5">
        {/* EXTREME LEFT: Logo + YKCODES with effect */}
        <div className="flex items-center min-w-0 flex-shrink-0">
          <a href="#about-me" className="flex items-center gap-1.5 pl-1.5 md:pl-3 group">
            <span className="bg-white rounded-full p-0.5 shadow border-2 border-cyan-200 group-hover:shadow-[0_0_12px_0_rgba(34,211,238,0.3)] transition-all duration-300">
              <Image
                src="/pic1.svg"
                alt="YKCODES Logo"
                width={38}
                height={38}
                className="rounded-full w-[38px] h-[38px] object-cover"
              />
            </span>
            <span className="font-extrabold text-[15px] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-white animate-pulse drop-shadow hidden sm:block group-hover:text-cyan-300 transition-colors duration-300">
              YKCODES
            </span>
          </a>
        </div>
        {/* CENTER: Quick Links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-1.5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative px-3 py-1.5 font-helvetica font-semibold text-sm text-cyan-100 transition-colors duration-200
                hover:text-cyan-300 focus:text-cyan-400 group"
            >
              <span>{item.label}</span>
              <span className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-cyan-300 to-white rounded-full opacity-0 group-hover:w-4/5 group-hover:opacity-100 group-focus:w-4/5 group-focus:opacity-100 transition-all duration-300 transform -translate-x-1/2"></span>
            </a>
          ))}
        </div>
        {/* EXTREME RIGHT: Socials + Theme */}
        <div className="hidden md:flex items-center gap-2 pr-1.5 md:pr-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-700 rounded-lg p-1.5 bg-black/30 hover:bg-cyan-900/30 transition"
              aria-label={social.name}
            >
              <social.icon size={18} className="text-cyan-200 hover:text-cyan-400 transition" />
            </a>
          ))}
          {/* Theme Toggle */}
          <button
            onClick={toggleInvertTheme}
            className="ml-1.5 w-10 h-6 flex items-center rounded-full border-2 border-slate-600 bg-black/60 transition relative"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <span className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-cyan-400 shadow-md transition-transform duration-300 ${isInverted ? 'translate-x-4' : ''}`} />
          </button>
        </div>
        {/* Hamburger Menu Button (mobile only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden ml-1.5 text-cyan-300 hover:text-white focus:outline-none pr-1.5"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-72 max-w-full h-full bg-gradient-to-br from-black/90 via-blue-900/80 to-cyan-900/80 shadow-2xl z-[100] flex flex-col px-0 py-0 md:hidden border-l border-cyan-400/20 backdrop-blur-2xl rounded-l-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white z-10"
              aria-label="Close sidebar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Logo */}
            <div className="flex items-center gap-3 px-6 py-8 border-b border-slate-800/30">
              <span className="bg-white rounded-full p-1 shadow border-2 border-slate-300">
                <Image src="/pic1.svg" alt="YKCODES Logo" width={48} height={48} className="rounded-full w-12 h-12 object-cover" />
              </span>
              <span className="font-extrabold text-lg tracking-widest text-slate-100 drop-shadow">YKCODES</span>
            </div>
            {/* Quick Links */}
            <div className="flex flex-col gap-2 px-6 py-8 flex-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative w-full px-4 py-3 font-helvetica font-semibold text-base transition-colors duration-200 text-cyan-100 hover:text-cyan-300 focus:text-cyan-400 group"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-1/2 bottom-2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-cyan-300 to-white rounded-full opacity-0 group-hover:w-4/5 group-hover:opacity-100 group-focus:w-4/5 group-focus:opacity-100 transition-all duration-300 transform -translate-x-1/2"></span>
                </a>
              ))}
            </div>
            {/* Download CV */}
            <a
              href="/Yasal_Khan_CV.pdf"
              download
              className="mx-6 mb-4 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-700 to-cyan-400 text-white rounded-xl font-semibold shadow hover:from-cyan-400 hover:to-cyan-700 transition-colors w-[calc(100%-3rem)]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download CV
            </a>
            {/* Socials + Theme Toggle */}
            <div className="flex items-center justify-between gap-2 px-6 pb-8">
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-700 rounded-lg p-2 bg-black/30 hover:bg-cyan-900/30 transition"
                    aria-label={social.name}
                  >
                    <social.icon size={28} className="text-cyan-200 hover:text-cyan-400 transition" />
                  </a>
                ))}
              </div>
              <button
                onClick={toggleInvertTheme}
                className="w-12 h-7 flex items-center rounded-full border-2 border-slate-600 bg-black/60 transition relative"
                aria-label="Toggle theme"
                title="Toggle theme"
              >
                <span className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-cyan-400 shadow-md transition-transform duration-300 ${isInverted ? 'translate-x-5' : ''}`} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
