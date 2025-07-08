import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

// Floating Project Card Component
const FloatingCard: React.FC<{ position: [number, number, number]; title: string; color: string }> = ({ position, title, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[2, 1.5, 0.1]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={hovered ? 0.3 : 0.1} />
      </Box>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
};

// Skill Sphere Component
const SkillSphere: React.FC<{ position: [number, number, number]; skill: string; color: string }> = ({ position, skill, color }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[0.5, 16, 16]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={hovered ? 0.5 : 0.2} />
      </Sphere>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
};

// Main Scene Component
const Scene: React.FC = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FF4FCE" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00F0FF" />
      
      {/* Grid Floor */}
      <gridHelper args={[20, 20, '#FF4FCE', '#00F0FF']} />
      
      {/* Floating Project Cards */}
      <FloatingCard position={[-3, 2, 0]} title="Web App" color="#FF4FCE" />
      <FloatingCard position={[3, 1, 0]} title="Mobile App" color="#00F0FF" />
      <FloatingCard position={[0, 3, -2]} title="3D Design" color="#39FF14" />
      
      {/* Skill Spheres */}
      <SkillSphere position={[-5, 0, 0]} skill="React" color="#61DAFB" />
      <SkillSphere position={[5, 0, 0]} skill="Three.js" color="#000000" />
      <SkillSphere position={[0, 0, 5]} skill="TypeScript" color="#3178C6" />
      <SkillSphere position={[0, 0, -5]} skill="Node.js" color="#339933" />
      
      {/* Central Workstation */}
      <group position={[0, 0, 0]}>
        <Box args={[4, 0.2, 2]} position={[0, -0.1, 0]}>
          <meshStandardMaterial color="#333" />
        </Box>
        <Cylinder args={[0.1, 0.1, 1]} position={[0, 0.4, 0]}>
          <meshStandardMaterial color="#FF4FCE" emissive="#FF4FCE" emissiveIntensity={0.3} />
        </Cylinder>
      </group>
      
      {/* Orbit Controls */}
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
    </>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="w-full h-[80vh] relative">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <Scene />
      </Canvas>
      <div className="absolute bottom-4 left-4 text-neon-green text-sm">
        <p>🎮 Click and drag to explore • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default Scene3D; 