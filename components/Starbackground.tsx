"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error - maath/random has no types
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from 'three';

const StarBackground = () => {
  const ref = useRef<THREE.Points>(null!);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(20000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
    ref.current.rotation.x -= delta/40;
    ref.current.rotation.y -= delta/60;
    }
  })


  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        >
            <PointMaterial
                transparent
                color="$fff"
                size={0.0005}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="absolute inset-0 -z-20 pointer-events-none">
        <Canvas camera={{position: [0, 0, 1]}}>
        <Suspense fallback={null}>
            <StarBackground />
        </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;