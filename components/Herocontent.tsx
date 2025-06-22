"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

// Terminal lines
const introLines = [
  "Initializing Portfolio...",
  "Hi, I'm Yasal Khan 👋",
  "Full Stack Developer & UI/UX Designer",
  "Final Year BSCS Student @ FAST NUCES",
  "React • Next.js • TypeScript • Node.js",
  "Building Scalable Web Applications",
  "DOWNLOAD_RESUME"
];

const techStackLines = [
  "Frontend: React, Next.js, TypeScript",
  "Backend: Node.js, Express, MongoDB",
  "UI/UX: Tailwind CSS, Framer Motion",
  "Tools: Git, Docker, Firebase",
  "Databases: MongoDB, PostgreSQL",
  "Cloud: AWS, Vercel, Netlify",
  "Testing: Jest, React Testing Library",
  "CI/CD: GitHub Actions, Jenkins",
];

const marketTrends = [
  {
    category: "Frontend",
    trends: [
      "React Server Components",
      "Next.js 14 & App Router",
      "TypeScript Integration",
      "Micro-Frontends",
    ]
  },
  {
    category: "Backend",
    trends: [
      "GraphQL APIs",
      "Serverless Architecture",
      "Edge Computing",
      "Real-time Systems",
    ]
  },
  {
    category: "DevOps",
    trends: [
      "Infrastructure as Code",
      "Container Orchestration",
      "CI/CD Automation",
      "Cloud-Native Solutions",
    ]
  },
  {
    category: "Emerging Tech",
    trends: [
      "AI/ML Integration",
      "WebAssembly",
      "Blockchain Development",
      "IoT Solutions",
    ]
  }
];

// Loading Component
const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black z-50 flex items-center justify-center"
  >
    <div className="text-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mb-4"
      />
      <p className="text-purple-400 font-mono">Loading Portfolio...</p>
    </div>
  </motion.div>
);

// Reusable terminal box
const TerminalBox = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={title === "Welcome" ? slideInFromLeft(0.2) : slideInFromLeft(0.3)}
    initial="hidden"
    animate="visible"
    className={`group relative bg-black/80 backdrop-blur-xl p-6 rounded-xl font-mono text-cyan-200 text-sm sm:text-base shadow-lg w-full transition-all duration-300 ${className}`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* Main content container with enhanced inner glow */}
    <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/10 via-blue-900/5 to-cyan-300/10 backdrop-blur-xl overflow-hidden border border-cyan-400/20">
      {/* Content */}
      <div className="relative z-10 p-4 bg-gradient-to-b from-black/50 via-blue-900/10 to-black/50">
        <p className="text-cyan-300 mb-2 flex items-center">
          <span className="mr-2 text-cyan-400">⚡</span> {title}
        </p>
        <div className="text-cyan-100/90">
          {children}
        </div>
      </div>

      {/* Bottom border animation */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400/0 via-cyan-300 to-cyan-400/0"
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
          background: "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.15), transparent)",
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

      {/* Subtle hover shine overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </div>
  </motion.div>
);

// Digital Clock Component
const ClockTerminal = () => {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
      setDate(now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }));
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TerminalBox title="System Status" className="h-full">
      <motion.div style={{ opacity, y }} className="space-y-4">
        <div className="space-y-2">
          <p className="text-yellow-300">
            <span className="text-purple-400">$</span> Current Date: {date}
          </p>
          <p className="text-yellow-300">
            <span className="text-purple-400">$</span> Current Time: {time}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-gray-300">System Metrics:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-24 text-gray-400">CPU:</div>
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-gray-400">Memory:</div>
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "60%" }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-24 text-gray-400">Network:</div>
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-purple-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-300">System Status:</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-800/50 p-2 rounded">
              <p className="text-green-400 text-sm">✓ Server Online</p>
            </div>
            <div className="bg-gray-800/50 p-2 rounded">
              <p className="text-green-400 text-sm">✓ Database Connected</p>
            </div>
            <div className="bg-gray-800/50 p-2 rounded">
              <p className="text-green-400 text-sm">✓ Cache Active</p>
            </div>
            <div className="bg-gray-800/50 p-2 rounded">
              <p className="text-green-400 text-sm">✓ SSL Secure</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-gray-300">Recent Activity:</p>
          <div className="space-y-1 text-sm">
            <p className="text-gray-400">• Portfolio loaded successfully</p>
            <p className="text-gray-400">• Assets optimized</p>
            <p className="text-gray-400">• Animations initialized</p>
          </div>
        </div>
      </motion.div>
    </TerminalBox>
  );
};

// Market Trends Component
const MarketTrends = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <TerminalBox title="Market Trends" className="h-full">
      <motion.div style={{ opacity, scale }} className="space-y-4">
        {marketTrends.map((section, index) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <p className="text-yellow-300">
              <span className="text-purple-400">$</span> {section.category}:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
              {section.trends.map((trend, i) => (
                <motion.li
                  key={trend}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  className="hover:text-white transition-colors cursor-default"
                >
                  {trend}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </TerminalBox>
  );
};

// Hero Content Component
const HeroContent = () => {
  const [showTechStack, setShowTechStack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const { scrollYProgress } = useScroll();
  // const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  // const y = useSpring(useTransform(scrollYProgress, [0, 0.2], [100, 0]), springConfig);
  // const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Staggered reveal animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  } as const;

  const itemVariants = {
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
  } as const;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center justify-center px-4 sm:px-10 max-w-7xl mx-auto z-[20]"
    >
      <motion.div 
        variants={itemVariants}
        className="w-full max-w-4xl flex flex-col items-center gap-6"
      >
        <TerminalBox title="Welcome" className="w-full">
          {introLines.map((line, index) => {
            if (line === "DOWNLOAD_RESUME") {
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <a
                    href="/Yasal_Khan_CV.pdf"
                    download
                    className="text-red-400 hover:text-yellow-300 transition-colors flex items-center group"
                  >
                    <span className="text-purple-400">$ </span> download-resume.sh
                    <motion.span
                      className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                    >
                      (Click to download)
                    </motion.span>
                  </a>
                </motion.div>
              );
            }

            return (
              <motion.p
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="whitespace-pre-wrap hover:text-white transition-colors"
              >
                <span className="text-purple-400">$</span> {line}
                {index === introLines.length - 1 && (
                  <motion.span
                    animate={{ 
                      opacity: [0, 1, 0],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1,
                      ease: "easeInOut"
                    }}
                    className="inline-block w-1.5 h-5 ml-1 align-bottom bg-green-400 rounded-sm"
                  />
                )}
              </motion.p>
            );
          })}
        </TerminalBox>

        <TerminalBox title="Tech Stack" className="w-full">
          {!showTechStack ? (
            <motion.button
              onClick={() => setShowTechStack(true)}
              className="text-red-400 hover:text-yellow-300 transition-colors flex items-center group"
              whileHover={{ 
                scale: 1.02,
                x: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-purple-400">$</span> view-tech-stack.sh --details
              <motion.span
                className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
              >
                (Click to expand)
              </motion.span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {techStackLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    x: 5,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="text-yellow-300 whitespace-pre-wrap hover:text-white transition-colors"
                >
                  <span className="text-purple-400">$</span> {line}
                  {index === techStackLines.length - 1 && (
                    <motion.span
                      animate={{ 
                        opacity: [0, 1, 0],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1,
                        ease: "easeInOut"
                      }}
                      className="inline-block w-1.5 h-5 ml-1 align-bottom bg-green-400 rounded-sm"
                    />
                  )}
                </motion.p>
              ))}
              <motion.button
                onClick={() => setShowTechStack(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: techStackLines.length * 0.05 + 0.3 }}
                whileHover={{ 
                  scale: 1.02,
                  x: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 text-red-400 hover:text-yellow-300 transition-colors flex items-center group"
              >
                <span className="text-purple-400">$</span> hide-tech-stack
                <motion.span
                  className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                >
                  (Click to collapse)
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </TerminalBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <ClockTerminal />
          <MarketTrends />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
