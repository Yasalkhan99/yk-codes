"use client";
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import * as HeroIcons from "@heroicons/react/24/solid"; // Import all icons

interface Props {
  title: string;
  description: string;
  github: string;
  tech: string[];
  features: string[];
  animation: string;
  icon: keyof typeof HeroIcons; // Use keyof typeof HeroIcons for type safety
}

// Helper component to render a HeroIcon dynamically
const DynamicHeroIcon = ({ iconName }: { iconName: keyof typeof HeroIcons }) => {
  const IconComponent = HeroIcons[iconName];
  if (!IconComponent) {
    return null; // Or a fallback icon
  }
  return <IconComponent className="h-8 w-8 text-white/80 group-hover:text-white transition-colors duration-300" />;
};

const ProjectCard = ({ title, description, github, tech, features, animation, icon }: Props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Custom animations based on project type
  const getAnimationComponent = () => {
    switch (animation) {
      case "maze":
        return (
          <motion.div
            className="w-full h-48 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/10 rounded-lg" />
            </div>
          </motion.div>
        );
      case "hex":
        return (
          <motion.div
            className="w-full h-48 bg-gradient-to-br from-green-600/10 to-blue-600/10 rounded-xl overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/10" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
            </div>
          </motion.div>
        );
      case "scraper":
        return (
          <motion.div
            className="w-full h-48 bg-gradient-to-br from-yellow-600/10 to-red-600/10 rounded-xl overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/10 rounded-full" />
            </div>
          </motion.div>
        );
      case "portfolio":
        return (
          <motion.div
            className="w-full h-48 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/10 rounded-lg" />
            </div>
          </motion.div>
        );
      case "ai":
        return (
          <motion.div
            className="w-full h-48 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/10 rounded-full" />
            </div>
          </motion.div>
        );
      case "ecommerce":
        return (
          <motion.div
            className="w-full h-48 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-xl overflow-hidden relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 border-2 border-white/10 rounded-lg" />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="group relative w-[280px] h-[520px] cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Subtle Border Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] rounded-xl blur-[2px] opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
      
      <motion.div
        className="relative w-full h-full rounded-xl bg-[#0a0a0a]/95 backdrop-blur-sm overflow-hidden border border-[#1a1a1a]"
        style={{
          transform: "translateZ(0px)",
          transformStyle: "preserve-3d",
        }}
        whileHover={{ 
          scale: 1.01,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        {/* Custom Animation Component */}
        <motion.div 
          className="relative w-full h-48 overflow-hidden"
          style={{
            transform: "translateZ(0px)",
          }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {getAnimationComponent()}
          
          {/* Project Icon Here */}
          <div className="absolute top-3 left-3" style={{ transform: "translateZ(40px)" }}>
            <DynamicHeroIcon iconName={icon} />
          </div>

          {/* Tech Stack Pills */}
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1.5" style={{ transform: "translateZ(40px)" }}>
            {tech.map((item, index) => (
              <motion.span
                key={index}
                className="px-2 py-0.5 text-xs bg-[#1a1a1a] text-white/80 rounded-full border border-[#2a2a2a]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#2a2a2a",
                  borderColor: "#333333",
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Project Info */}
        <div className="p-5 space-y-3" style={{ transform: "translateZ(30px)" }}>
          <motion.h1 
            className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.01 }}
          >
            {title}
          </motion.h1>
          
          <p className="text-xs text-gray-400 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Features List */}
          <div className="space-y-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center text-xs text-gray-400 group-hover:text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="mr-1">•</span>
                {feature}
              </motion.div>
            ))}
          </div>

          {/* GitHub Link */}
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:bg-[#2a2a2a] transition-all duration-300 w-full justify-center"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
              borderColor: "#333333",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              transform: "translateZ(40px)",
            }}
          >
            <svg 
              className="w-5 h-5 text-white/90 group-hover:text-white transition-colors duration-300" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">
              View on GitHub
            </span>
          </motion.a>
        </div>

        {/* Subtle Hover Effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            transform: "translateZ(60px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;