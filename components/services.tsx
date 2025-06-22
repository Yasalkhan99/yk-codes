"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "./servicecard";
import { 
  CodeBracketIcon, 
  ServerIcon, 
  PaintBrushIcon, 
  DevicePhoneMobileIcon, 
  RocketLaunchIcon, 
  CpuChipIcon,
  CloudIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

const servicesData = [
  {
   src: "/SpaceWebsite.png",
    title: "Frontend Development",
    description: "Building cutting-edge user interfaces with advanced React and Next.js technologies. Creating immersive web experiences with modern animations and interactions.",
    icon: CodeBracketIcon,
    features: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"]
  },
  {
    src: "/SpaceWebsite.png",
    title: "Backend Development",
    description: "Engineering robust server architectures with Node.js and Express. Implementing scalable APIs and secure database solutions.",
    icon: ServerIcon,
    features: ["Node.js & Express", "MongoDB", "RESTful APIs", "Authentication"],
    tech: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    src: "/SpaceWebsite.png",
    title: "UI/UX Design",
    description: "Crafting intuitive and futuristic user interfaces with advanced design principles and cutting-edge tools.",
    icon: PaintBrushIcon,
    features: ["Figma", "Responsive Design", "User Research", "Prototyping"],
    tech: ["Figma", "Adobe XD", "Sketch", "InVision"]
  },
  {
    src: "/SpaceWebsite.png",
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with React Native and Flutter. Creating native-like experiences across all devices.",
    icon: DevicePhoneMobileIcon,
    features: ["React Native", "Flutter", "Mobile UI", "Native Features"],
    tech: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    src: "/SpaceWebsite.png",
    title: "DevOps & Cloud",
    description: "Implementing automated deployment pipelines and cloud infrastructure solutions for scalable applications.",
    icon: CloudIcon,
    features: ["CI/CD", "Docker", "AWS", "Kubernetes"],
    tech: ["Docker", "AWS", "Jenkins", "Kubernetes"]
  },
  {
    src: "/SpaceWebsite.png",
    title: "AI Integration",
    description: "Integrating artificial intelligence and machine learning capabilities into web applications for enhanced functionality.",
    icon: CpuChipIcon,
    features: ["Machine Learning", "NLP", "Computer Vision", "AI APIs"],
    tech: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"]
  }
];

const Services = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 scale-[0.82] origin-top" id="services">
      {/* Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BoltIcon className="w-8 h-8 text-blue-500 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-light font-sans text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400">
                Advanced Services
              </h2>
              <BoltIcon className="w-8 h-8 text-blue-500 animate-pulse" />
            </div>
            <div className="relative">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full" />
              <motion.div
                className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
                animate={{
                  x: [-64, 64, -64],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Cutting-edge development solutions powered by advanced technologies
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
          <ServiceCard
            title={service.title}
            description={service.description}
                icon={service.icon}
                features={service.features}
          />
            </motion.div>
          ))}
  </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2 font-sans font-light text-base text-slate-300 rounded-lg border border-slate-400/30 bg-gradient-to-r from-slate-800/40 via-slate-700/20 to-slate-800/40 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-slate-200/60 hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Initialize Project</span>
            <RocketLaunchIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform text-slate-300 group-hover:text-white" />
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

export default Services;
