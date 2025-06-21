"use client"
import React from "react";
import HeroContent from "./Herocontent";
import { motion } from "framer-motion";
import { SparklesIcon, RocketLaunchIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import RubiksCube from "./RubiksCube";
import { BoltIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div 
      className="relative flex flex-col w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 scale-[0.8] origin-top"
      id="about-me"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/40 to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow">
        {/* Stylish Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 18 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BoltIcon className="w-8 h-8 text-purple-400 animate-pulse" />
              <motion.h1
                className="text-4xl md:text-5xl font-light font-sans text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 flex gap-2 justify-center"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.22
                    }
                  }
                }}
              >
                {["Code.", "Create.", "Inspire."].map((word, i) => (
                  <motion.span
                    key={word}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <BoltIcon className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>
            <div className="relative">
              <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
              <motion.div
                className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
                animate={{ x: [-64, 64, -64] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Explore my journey, skills, and projects as a passionate developer and designer. Dive into the world of creativity and code!
          </motion.p>
        </motion.div>

        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Hero Content */}
          <div className="lg:col-span-8">
            <HeroContent />
          </div>

          {/* Right Side - Info Cards and Rubik's Cube */}
          <div className="lg:col-span-4 space-y-6">
            {/* Rubik's Cube */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-black/80 backdrop-blur-xl p-6 rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/20 h-[400px] overflow-hidden"
            >
              <RubiksCube />
              {/* Bottom border animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-400 to-purple-500/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            {/* Creative Portfolio Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="group relative bg-black/80 backdrop-blur-xl p-6 rounded-xl border border-purple-500/30 shadow-lg shadow-purple-500/20 overflow-hidden"
            >
              <div className="flex items-center space-x-3 mb-4">
                <SparklesIcon className="w-6 h-6 text-purple-400 animate-pulse" />
                <h3 className="text-lg font-semibold text-white">Creative Portfolio</h3>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Crafting beautiful digital experiences with modern web technologies
              </p>
              {/* Bottom border animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-400 to-purple-500/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Moving shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent)",
                  transform: "skewX(-15deg)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />
            </motion.div>

            {/* Latest Work Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ 
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="group relative bg-black/80 backdrop-blur-xl p-6 rounded-xl border border-blue-500/30 shadow-lg shadow-blue-500/20 overflow-hidden"
            >
              <div className="flex items-center space-x-3 mb-4">
                <RocketLaunchIcon className="w-6 h-6 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Latest Work</h3>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-gray-300"
                >
                  • Modern Portfolio Design
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-gray-300"
                >
                  • Interactive UI/UX Projects
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-gray-300"
                >
                  • Creative Web Solutions
                </motion.div>
              </div>
              {/* Bottom border animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Moving shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                  transform: "skewX(-15deg)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              className="group relative bg-black/80 backdrop-blur-xl p-6 rounded-xl border border-green-500/30 shadow-lg shadow-green-500/20 overflow-hidden"
            >
              <div className="flex items-center space-x-3 mb-4">
                <AcademicCapIcon className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-gray-300"
                >
                  FAST NUCES
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-gray-300"
                >
                  BSCS Final Year
                </motion.div>
              </div>
              {/* Bottom border animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500/0 via-green-400 to-green-500/0"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Moving shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)",
                  transform: "skewX(-15deg)",
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;