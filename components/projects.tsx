"use client";

import React from "react";
import ProjectCard from "./Projectcard";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import * as HeroIcons from "@heroicons/react/24/solid";

const projectsData = [
  {
    title: "HEX-AI Maze Puzzle Solver",
    description: "An interactive Python application that visualizes pathfinding algorithms (BFS, DFS, A*) on dynamically generated mazes. Features include real-time algorithm visualization, custom maze generation, and performance metrics.",
    github: "https://github.com/Yasalkhan99/HEX-AI_Maze_puzzle_solver-SEMS-Project",
    tech: ["Python", "Pygame", "AI", "Pathfinding"],
    features: [
      "Real-time algorithm visualization",
      "Custom maze generation",
      "Performance metrics",
      "Interactive controls"
    ],
    animation: "maze",
    icon: "CubeTransparentIcon"
  },
  {
    title: "Hex Game with AI Players",
    description: "A sophisticated implementation of the classic Hex board game with multiple AI agents. Implements Minimax with Alpha-Beta pruning and Monte Carlo Tree Search (MCTS) for intelligent gameplay.",
    github: "https://github.com/Yasalkhan99/-Hex-Game-with-AI-Players",
    tech: ["Python", "AI", "Game Theory", "MCTS"],
    features: [
      "Multiple AI strategies",
      "Advanced game theory",
      "Performance optimization",
      "Interactive gameplay"
    ],
    animation: "hex",
    icon: "PuzzlePieceIcon"
  },
  {
    title: "Social Media Scraper",
    description: "A powerful data extraction tool built with Python and Selenium. Enables efficient collection and analysis of social media data across multiple platforms with customizable scraping parameters.",
    github: "https://github.com/Yasalkhan99/Social-Media-Scrapper",
    tech: ["Python", "Selenium", "Web Scraping", "Data Analysis"],
    features: [
      "Multi-platform support",
      "Customizable scraping",
      "Data analysis tools",
      "Automated workflows"
    ],
    animation: "scraper",
    icon: "CloudArrowDownIcon"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my work and skills. Built with Next.js and featuring smooth animations, interactive UI elements, and a clean design.",
    github: "https://github.com/Yasalkhan99/portfolio",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"],
    features: [
      "Responsive design",
      "Interactive animations",
      "Modern UI/UX",
      "Performance optimized"
    ],
    animation: "portfolio",
    icon: "ComputerDesktopIcon"
  },
  {
    title: "AI Image Generator",
    description: "An AI-powered image generation tool leveraging OpenAI's DALL-E API. Allows users to create unique images from text descriptions with advanced customization options.",
    github: "https://github.com/Yasalkhan99/ai-image-generator",
    tech: ["React", "OpenAI", "Node.js", "Express"],
    features: [
      "AI image generation",
      "Custom prompts",
      "Image variations",
      "User customization"
    ],
    animation: "ai",
    icon: "SparklesIcon"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with comprehensive features including user authentication, product management, shopping cart functionality, and secure payment processing.",
    github: "https://github.com/Yasalkhan99/ecommerce",
    tech: ["MERN Stack", "Redux", "Stripe", "MongoDB"],
    features: [
      "User authentication",
      "Product management",
      "Shopping cart",
      "Payment processing"
    ],
    animation: "ecommerce",
    icon: "ShoppingCartIcon"
  }
];

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-10 mt-0 relative overflow-hidden scale-[0.85] origin-top" id="projects">
      {/* Header Section */}
      <motion.div
        style={{ opacity, scale, y: springY }}
        className="w-full flex flex-col items-center mb-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 18 }}
          className="group relative bg-black/80 backdrop-blur-xl px-4 py-2 rounded-xl font-mono text-violet-200 text-xs shadow-lg border border-violet-500/20 w-full max-w-md mb-2 flex items-center gap-2"
        >
          <span className="text-violet-400">●</span>
          <span className="uppercase font-semibold tracking-widest text-violet-300">Project Section</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 18, delay: 0.05 }}
          className="text-5xl md:text-6xl font-light font-sans text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 text-center mb-4 tracking-tight drop-shadow"
        >
          Project Showcase
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A selection of my favorite and most impactful projects, blending creativity, code, and real-world results.
        </motion.p>
        <motion.div
          className="w-16 h-0.5 bg-gradient-to-r from-violet-500 via-violet-300 to-violet-500 mx-auto rounded-full opacity-70"
          initial={{ scaleX: 0.8, opacity: 0.5 }}
          animate={{ scaleX: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="w-full max-w-7xl mx-auto px-4 relative"
        style={{ opacity, y }}
      >
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                github={project.github}
                tech={project.tech}
                features={project.features}
                animation={project.animation}
                icon={project.icon as keyof typeof HeroIcons}
              />
            </motion.div>
          ))}
        </div>

        {/* More Projects Button */}
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/Yasalkhan99?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2 font-sans font-light text-base text-slate-300 rounded-lg border border-slate-400/30 bg-gradient-to-r from-slate-800/40 via-slate-700/20 to-slate-800/40 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-200/60 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">View More Projects</span>
            <HeroIcons.RocketLaunchIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform text-slate-300 group-hover:text-white" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/0 via-slate-200/20 to-slate-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-400/0 via-white/10 to-slate-400/0 pointer-events-none"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
