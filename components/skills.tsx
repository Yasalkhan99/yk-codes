"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React from "react";
import { motion } from "framer-motion";
import SkillText from "./Skilltext";
import { BoltIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

interface Skill {
  skill_name: string;
  Image: StaticImageData;
  width: number;
  height: number;
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      className="group relative bg-black/80 p-2 rounded-lg border border-[#ff00ff20] hover:border-[#ff00ff] transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff00ff10] to-[#00ffff10] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex items-center gap-2">
        <motion.div 
          className="w-8 h-8 relative"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src={skill.Image}
            alt={skill.skill_name}
            width={skill.width}
            height={skill.height}
            className="w-full h-full object-contain filter group-hover:brightness-150 transition-all duration-300"
          />
        </motion.div>
        <motion.h3 
          className="text-white/90 text-xs font-medium"
          whileHover={{ scale: 1.1, color: "#ff00ff" }}
          transition={{ duration: 0.2 }}
        >
          {skill.skill_name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-[#ffffff10]"
    >
      <motion.h2 
        className="text-lg font-light font-sans text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 mb-3"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-4 h-full relative overflow-hidden py-12 scale-[0.85] origin-top bg-[radial-gradient(ellipse_at_center,rgba(23,23,23,0.3)_40%,transparent_100%)]"
    >
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
            <BoltIcon className="w-8 h-8 text-fuchsia-400 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-light font-sans text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400">
              My Skill Arsenal
            </h2>
            <BoltIcon className="w-8 h-8 text-fuchsia-400 animate-pulse" />
          </div>
          <div className="relative">
            <div className="w-32 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto rounded-full" />
            <motion.div
              className="absolute top-0 left-1/2 w-1 h-1 bg-fuchsia-400 rounded-full"
              animate={{ x: [-64, 64, -64] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Explore my diverse and ever-evolving skill set, from frontend wizardry to backend mastery and everything in between.
        </motion.p>
      </motion.div>

      <SkillText />

      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <SkillSection title="CORE TECHNOLOGIES" skills={Skill_data} />
            <SkillSection title="FRONTEND" skills={Frontend_skill} />
          </div>
          <div className="space-y-4">
            <SkillSection title="BACKEND" skills={Backend_skill} />
            <SkillSection title="TOOLS" skills={Full_stack} />
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute inset-0 z-[-1] opacity-5">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
