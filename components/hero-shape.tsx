"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export function HeroShape() {
  return (
    <div className="h-44 w-full md:h-56">
      <Canvas camera={{ position: [0, 0, 2.2] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.7}>
          <Sphere args={[0.72, 64, 64]} position={[0, 0, 0]}>
            <MeshDistortMaterial
              color="#0066FF"
              roughness={0.2}
              metalness={0.1}
              distort={0.33}
              speed={1.2}
              opacity={0.88}
              transparent
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
}
