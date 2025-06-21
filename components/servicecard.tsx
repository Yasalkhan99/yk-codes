"use client"
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface Props {
  src: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

const ServiceCard = ({ src, title, description, icon: Icon, features }: Props) => {
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

  return (
    <motion.div
      className="group relative w-full h-full cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Holographic Border Effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-blue-500/50 rounded-xl blur-[2px] opacity-0 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
      
      {/* Main Card */}
      <motion.div
        className="relative w-full h-full rounded-xl bg-white/5 backdrop-blur-xl overflow-hidden border border-white/10"
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
      >
        {/* Content Container */}
        <div className="relative p-6 space-y-4">
          {/* Icon and Title */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-500" />
              <Icon className="w-8 h-8 text-blue-400 relative z-10 group-hover:text-blue-300 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Features List */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
              >
                <CheckCircleIcon className="w-4 h-4 text-blue-400" />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Bottom Border Animation */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Hover Effect Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            transform: "translateZ(60px)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
