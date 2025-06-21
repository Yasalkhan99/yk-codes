"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from 'three';

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);

  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(20000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/40;
    ref.current.rotation.y -= delta/60;
  })


  return (
    <group rotation={[0,0, Math.PI / 4]}>
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
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