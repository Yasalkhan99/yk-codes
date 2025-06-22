"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, CheckCircleIcon, ChevronDownIcon, BoltIcon } from '@heroicons/react/24/solid';

// Initialize EmailJS with your public key
emailjs.init("vh4WFoT9u9YE96zQe");

// Service packages data
const servicePackages = [
  {
    name: "Basic",
    features: ["Single Page Website", "Basic SEO", "Contact Form", "1 Week Delivery"],
    complexity: "Simple",
    tech: ["React", "Tailwind CSS", "Basic API"],
    timeline: "1-2 weeks"
  },
  {
    name: "Professional",
    features: ["Multi-page Website", "Advanced SEO", "Custom Features", "2 Weeks Delivery"],
    complexity: "Moderate",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    timeline: "2-3 weeks"
  },
  {
    name: "Enterprise",
    features: ["Full Stack Application", "Premium Support", "Custom Design", "3+ Weeks Delivery"],
    complexity: "Complex",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "Docker"],
    timeline: "3-4 weeks"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechStart",
    text: "Excellent work! Delivered the project on time and exceeded our expectations.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    text: "Professional service and great communication throughout the project.",
    rating: 5
  },
  {
    name: "Mike Brown",
    role: "Startup Founder",
    text: "Highly recommended! The quality of work is outstanding.",
    rating: 5
  }
];

// FAQ data
const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in full-stack web development, including frontend (React, Next.js), backend (Node.js), and database solutions. I also offer UI/UX design services."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website might take 1-2 weeks, while a full-stack application could take 1-3 months. I'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, I offer maintenance and support packages to ensure your project continues to run smoothly after launch."
  },
  {
    question: "What is your development process?",
    answer: "My process includes initial consultation, planning, design, development, testing, and deployment. I maintain clear communication throughout each phase."
  }
];

// Recent Projects
// const recentProjects = [
//   {
//     title: "E-Commerce Platform",
//     description: "Full-stack e-commerce solution with React and Node.js",
//     image: "/project1.jpg"
//   },
//   {
//     title: "Portfolio Website",
//     description: "Modern portfolio website with Next.js and Tailwind CSS",
//     image: "/project2.jpg"
//   },
//   {
//     title: "AI Image Generator",
//     description: "AI-powered image generation tool using OpenAI",
//     image: "/project3.jpg"
//   }
// ];

const ContactForm = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    workType: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  // const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const templateParams = {
        to_email: "yasalkhan90@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        work_type: formData.workType,
        message: formData.message,
      };

      const response = await emailjs.send(
        "service_qlll8ek",
        "template_n9tkfxc",
        templateParams
      );

      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          workType: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const workTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Full Stack Development",
    "API Integration",
    "Other",
  ];

  return (
    <section id="contact" className="w-full min-h-screen flex flex-col items-center justify-center py-12 relative scale-[0.83] origin-top">
      <motion.div
        style={{ opacity, scale, y }}
        className="w-full max-w-5xl mx-auto px-4 relative z-10"
      >
        {/* Header Section - Hero Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 100, damping: 18 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BoltIcon className="w-8 h-8 text-purple-400 animate-pulse" />
              <motion.h2
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
                {["Contact.", "Collaborate.", "Connect."].map((word) => (
                  <motion.span
                    key={word}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              <BoltIcon className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>
            <div className="relative">
              <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full" />
              <motion.div
                className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
                animate={{ x: [-64, 64, -64] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
          <motion.p
            className="text-gray-400 text-base max-w-xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        {/* Service Packages - Compact Version */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
        >
          {servicePackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-black/20 backdrop-blur-xl p-3 rounded-xl border border-purple-500/20 shadow-xl"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-base font-semibold text-white">{pkg.name}</h3>
                <span className="text-purple-400 font-medium text-xs">{pkg.complexity}</span>
              </div>
              <ul className="space-y-0.5 mb-1">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-xs">
                    <CheckCircleIcon className="w-3 h-3 text-green-400 mr-1" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mb-1">
                <p className="text-gray-400 text-xs mb-0.5">Tech Stack:</p>
                <div className="flex flex-wrap gap-0.5">
                  {pkg.tech.map((tech, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-purple-500/10 text-purple-400 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-xs">Timeline: {pkg.timeline}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact Form - More Compact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/20 backdrop-blur-xl p-4 rounded-xl border border-purple-500/20 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="workType" className="block text-xs font-medium text-gray-300 mb-1">
                  Type of Work
                </label>
                <select
                  id="workType"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 text-sm"
                >
                  <option value="">Select a service</option>
                  {workTypes.map((type) => (
                    <option key={type} value={type} className="bg-black">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all duration-300 text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center text-sm"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-2 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center text-sm"
                >
                  {error}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Column - More Compact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Contact Info - More Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/20 backdrop-blur-xl p-4 rounded-xl border border-purple-500/20 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-3">Get in Touch</h3>
              <div className="space-y-2">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                  <a href="mailto:yasalkhan90@gmail.com" className="text-sm hover:text-purple-400 transition-colors">
                    yasalkhan90@gmail.com
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 text-purple-400" />
                  <a href="tel:+1234567890" className="text-sm hover:text-purple-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                >
                  <MapPinIcon className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Your Location</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Testimonials - More Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/20 backdrop-blur-xl p-4 rounded-xl border border-purple-500/20 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-3">Client Testimonials</h3>
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  What Our Clients Say
                </h3>
                <div className="relative h-40 flex items-center justify-center">
                  <AnimatePresence>
                    <motion.div
                      key={currentTestimonial}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full"
                    >
                      <p className="text-lg text-gray-300 italic">
                        &quot;{testimonials[currentTestimonial].text}&quot;
                      </p>
                      <p className="text-sm font-semibold mt-2 text-white">
                        - {testimonials[currentTestimonial].name},{" "}
                        {testimonials[currentTestimonial].role}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section - More Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/20 backdrop-blur-xl p-4 rounded-xl border border-purple-500/20 shadow-xl"
            >
              <h3 className="text-lg font-semibold text-white mb-3">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-purple-500/20 last:border-0 pb-2 last:pb-0"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="text-white text-sm font-medium">{faq.question}</span>
                      <ChevronDownIcon
                        className={`w-4 h-4 text-purple-400 transition-transform duration-300 ${
                          openFaq === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-1 text-gray-400 text-sm"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-gray-400 mb-6">
            I&apos;m currently available for freelance work and open to new
            opportunities.
          </p>
          <a
            href="mailto:yasalkhan90@gmail.com"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm; 