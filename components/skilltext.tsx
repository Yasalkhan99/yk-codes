"use client"
import React from 'react'
import {motion, useScroll, useTransform, useSpring, Variants} from 'framer-motion'
import { SparklesIcon, CodeBracketIcon, AcademicCapIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  const { scrollYProgress } = useScroll();
  
  // Spring animation for smoother motion
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const springY = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5], [100, 0, 0, -100]), springConfig);
  
  // Transform scroll progress into various animation values
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5], [0.8, 1, 1, 0.8]);
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5], [10, 0, 0, 10]);
  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.5], [5, 0, 0, -5]);

  // Staggered animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      className='w-full h-auto flex flex-col items-center justify-center'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        style={{ 
          opacity, 
          scale, 
          y: springY,
          filter: `blur(${blur}px)`,
          rotate
        }}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] hover:border-[#b49bff] transition-colors duration-300"
        variants={itemVariants}
      >
        <div className="flex items-center">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[13px] font-medium tracking-wide">
            Final Year BSCS Student @ FAST NUCES
          </h1>
        </div>
      </motion.div>

      <motion.div
        style={{ 
          opacity, 
          scale, 
          y: springY,
          filter: `blur(${blur}px)`,
          rotate
        }}
        className='text-[32px] text-white font-bold mt-[10px] text-center mb-[15px] tracking-tight hover:text-[#b49bff] transition-colors duration-300'
        variants={itemVariants}
      >
        Full Stack Developer & UI/UX Enthusiast
      </motion.div>

      <motion.div
        style={{ 
          opacity, 
          scale, 
          y: springY,
          filter: `blur(${blur}px)`,
          rotate
        }}
        className='text-[20px] text-gray-300 mb-10 mt-[10px] text-center font-light leading-relaxed max-w-2xl hover:text-white transition-colors duration-300'
        variants={itemVariants}
      >
        Passionate about creating elegant solutions with React, Next.js, and modern web technologies
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
        <motion.div
          variants={itemVariants}
          className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-[#7042f88b] hover:border-[#b49bff] transition-all duration-300"
        >
          <AcademicCapIcon className="h-8 w-8 text-[#b49bff] mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
          <p className="text-gray-400">BSCS at FAST NUCES</p>
          <p className="text-gray-400 text-sm mt-2">Focus on Software Engineering & Web Development</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-[#7042f88b] hover:border-[#b49bff] transition-all duration-300"
        >
          <CodeBracketIcon className="h-8 w-8 text-[#b49bff] mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Tech Stack</h3>
          <p className="text-gray-400">React • Next.js • TypeScript</p>
          <p className="text-gray-400 text-sm mt-2">Node.js • Tailwind • Firebase</p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-black/40 backdrop-blur-lg p-6 rounded-xl border border-[#7042f88b] hover:border-[#b49bff] transition-all duration-300"
        >
          <RocketLaunchIcon className="h-8 w-8 text-[#b49bff] mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
          <p className="text-gray-400">Freelance Developer</p>
          <p className="text-gray-400 text-sm mt-2">Building modern web applications</p>
        </motion.div>
      </div>

      {/* Additional Skills Section */}
      <motion.div
        variants={itemVariants}
        className="mt-12 w-full max-w-4xl bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-[#7042f88b] hover:border-[#b49bff] transition-all duration-300"
      >
        <div className="flex items-center mb-6">
          <UserGroupIcon className="h-8 w-8 text-[#b49bff] mr-4" />
          <h3 className="text-2xl font-semibold text-white">Core Competencies</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <p className="text-white font-medium">Frontend</p>
            <p className="text-gray-400 text-sm">React, Next.js, Tailwind</p>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <p className="text-white font-medium">Backend</p>
            <p className="text-gray-400 text-sm">Node.js, Express, MongoDB</p>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <p className="text-white font-medium">Tools</p>
            <p className="text-gray-400 text-sm">Git, Docker, Firebase</p>
          </div>
          <div className="text-center p-4 bg-black/20 rounded-lg">
            <p className="text-white font-medium">Soft Skills</p>
            <p className="text-gray-400 text-sm">Problem Solving, Teamwork</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default SkillText;