"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RubiksCube = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleDrag = (event: any, info: any) => {
    setRotation({
      x: rotation.x + info.delta.y * 0.5,
      y: rotation.y + info.delta.x * 0.5
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <motion.div
        className="relative w-48 h-48 cursor-grab active:cursor-grabbing"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDrag={handleDrag}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        {/* Front face */}
        <div
          className="absolute w-full h-full bg-red-500 border-2 border-black"
          style={{ transform: 'translateZ(24px)' }}
        />
        
        {/* Back face */}
        <div
          className="absolute w-full h-full bg-orange-500 border-2 border-black"
          style={{ transform: 'translateZ(-24px) rotateY(180deg)' }}
        />
        
        {/* Top face */}
        <div
          className="absolute w-full h-full bg-white border-2 border-black"
          style={{ transform: 'rotateX(90deg) translateZ(24px)' }}
        />
        
        {/* Bottom face */}
        <div
          className="absolute w-full h-full bg-yellow-500 border-2 border-black"
          style={{ transform: 'rotateX(-90deg) translateZ(24px)' }}
        />
        
        {/* Left face */}
        <div
          className="absolute w-full h-full bg-green-500 border-2 border-black"
          style={{ transform: 'rotateY(-90deg) translateZ(24px)' }}
        />
        
        {/* Right face */}
        <div
          className="absolute w-full h-full bg-blue-500 border-2 border-black"
          style={{ transform: 'rotateY(90deg) translateZ(24px)' }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="border border-black/30" />
          ))}
        </div>
      </motion.div>

      {/* Instructions */}
      <p className="text-sm text-gray-400 mt-2">
        Click and drag to rotate the cube
      </p>
    </div>
  );
};

export default RubiksCube; 