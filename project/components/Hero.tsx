// @ts-nocheck
'use client';

import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { smoothScrollTo } from '@/lib/smooth-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

// Local JSX intrinsic elements for R3F primitives to satisfy TS during build
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      ambientLight: any;
      pointLight: any;
      meshStandardMaterial: any;
    }
  }
}

function FloatingCodeElements() {
  const groupRef = useRef<any>(null);
  
  const elements = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      size: 0.02 + Math.random() * 0.04,
      speed: 0.5 + Math.random() * 0.5,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      color: ['#3b82f6', '#1d4ed8', '#60a5fa', '#2563eb'][Math.floor(Math.random() * 4)]
    }));
  }, []);

  useFrame((state: any) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.children.forEach((child: any, index: number) => {
        const element = elements[index];
        child.position.y += Math.sin(state.clock.elapsedTime * element.speed + index) * 0.01;
        child.rotation.y += element.rotationSpeed;
        child.rotation.x += element.rotationSpeed * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {elements.map((element, index) => (
        <group key={element.id} position={element.position}>
          <Box args={[element.size, element.size, element.size]}>
            <meshStandardMaterial
              color={element.color}
              emissive={element.color}
              emissiveIntensity={0.2}
              transparent
              opacity={0.8}
            />
          </Box>
        </group>
      ))}
    </group>
  );
}

function GeometricShapes() {
  const shapesRef = useRef<any>(null);
  
  const shapes = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      type: Math.floor(Math.random() * 3), // 0: box, 1: sphere, 2: torus
      scale: 0.1 + Math.random() * 0.2,
      rotationSpeed: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ] as [number, number, number]
    }));
  }, []);

  useFrame(() => {
    if (shapesRef.current) {
      shapesRef.current.children.forEach((child: any, index: number) => {
        const shape = shapes[index];
        child.rotation.x += shape.rotationSpeed[0];
        child.rotation.y += shape.rotationSpeed[1];
        child.rotation.z += shape.rotationSpeed[2];
      });
    }
  });

  return (
    <group ref={shapesRef}>
      {shapes.map((shape, index) => {
        const commonProps = {
          key: shape.id,
          position: shape.position,
          scale: shape.scale
        };

        if (shape.type === 0) {
          return (
            <Box {...commonProps}>
              <meshStandardMaterial
                color="#1d4ed8"
                transparent
                opacity={0.6}
                wireframe
              />
            </Box>
          );
        } else if (shape.type === 1) {
          return (
            <Sphere {...commonProps} args={[1, 8, 8]}>
              <meshStandardMaterial
                color="#3b82f6"
                transparent
                opacity={0.4}
                wireframe
              />
            </Sphere>
          );
        } else {
          return (
            <Torus {...commonProps} args={[1, 0.3, 8, 16]}>
              <meshStandardMaterial
                color="#60a5fa"
                transparent
                opacity={0.5}
                wireframe
              />
            </Torus>
          );
        }
      })}
    </group>
  );
}

function NetworkConnections() {
  const networkRef = useRef<any>(null);
  
  useFrame((state: any) => {
    if (networkRef.current) {
      networkRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const nodes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 4;
      return [
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        (Math.random() - 0.5) * 3
      ] as [number, number, number];
    });
  }, []);

  return (
    <group ref={networkRef}>
      {nodes.map((position, index) => (
        <group key={index}>
          <Sphere position={position} args={[0.05]}>
            <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={0.5} />
          </Sphere>
          {/* Connect to next node with Box instead of line */}
          {index < nodes.length - 1 && (
            (() => {
              const start = position;
              const end = nodes[index + 1];
              const midpoint = [
                (start[0] + end[0]) / 2,
                (start[1] + end[1]) / 2,
                (start[2] + end[2]) / 2
              ] as [number, number, number];
              const distance = Math.sqrt(
                Math.pow(end[0] - start[0], 2) +
                Math.pow(end[1] - start[1], 2) +
                Math.pow(end[2] - start[2], 2)
              );
              return (
                <Box position={midpoint} args={[distance, 0.01, 0.01]}>
                  <meshStandardMaterial 
                    color="#3b82f6" 
                    transparent 
                    opacity={0.3}
                    emissive="#1d4ed8"
                    emissiveIntensity={0.1}
                  />
                </Box>
              );
            })()
          )}
        </group>
      ))}
    </group>
  );
}

export default function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mql.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    if (mql.addEventListener) {
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    } else {
      // Safari fallback
      mql.addListener(handler);
      return () => mql.removeListener(handler);
    }
  }, []);
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden cosmic-bg">
      <div className="absolute inset-0 z-0">
        {!reduceMotion && (
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 75 }}
          onCreated={(state: any) => {
            state.gl.setClearColor('#0a0b1e', 0);
          }}
          onError={(error: any) => {
            console.warn('Canvas error:', error);
          }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1d4ed8" />
          
          <Suspense fallback={null}>
            <FloatingCodeElements />
            <GeometricShapes />
            <NetworkConnections />
          </Suspense>
        </Canvas>
        )}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-slate-900/30 z-5"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 animate-pulsate"></div>
              <div className="absolute inset-2 rounded-full glass-blue flex items-center justify-center text-2xl sm:text-4xl font-bold text-white">
                {/* Removed initials 'JK' */}
                {'</>'}
              </div>
              {/* Floating code symbols around avatar */}
              {['<', '>', '{', '}'].map((symbol, index) => (
                <motion.div
                  key={symbol}
                  className="absolute text-blue-400 text-lg sm:text-xl font-mono"
                  style={{
                    top: `${20 + Math.sin(index * Math.PI / 2) * 40}%`,
                    left: `${20 + Math.cos(index * Math.PI / 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-8 text-electric"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Jitendra
          </motion.h1>
          
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-glow"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Kumar Dodwadiya
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-4 leading-relaxed px-2">
              Full Stack Developer • MERN Specialist • AI & ML Enthusiast
            </p>
            {/* Concise value proposition tagline */}
            <p className="text-sm sm:text-base text-gray-300/90 italic mb-6 px-2">
              I build fast, accessible web apps with clean, scalable code and delightful UX.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-blue-300"
            >
              {[
                { icon: '⚛️', text: 'React.js' },
                { icon: '🟢', text: 'Node.js' },
                { icon: '🐍', text: 'Python' },
                { icon: '🤖', text: 'AI/ML' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.text}
                  className="flex items-center space-x-2"
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  <span className="text-xl sm:text-2xl">{tech.icon}</span>
                  <span className="text-sm sm:text-base font-medium">{tech.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
        >
          <motion.button
            onClick={() => smoothScrollTo('projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 btn-accent rounded-xl text-base sm:text-lg font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>🚀</span>
              <span>Explore Projects</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {[
            { name: 'GitHub', icon: FaGithub, color: '#3b82f6', url: 'https://github.com/dwdjitendra-cloud' },
            { name: 'LinkedIn', icon: FaLinkedin, color: '#1d4ed8', url: 'https://www.linkedin.com/in/dwdjitendra/' },
            { name: 'LeetCode', icon: SiLeetcode, color: '#60a5fa', url: 'https://leetcode.com/u/little_krishna/' },
            { name: 'X', icon: FaTwitter, color: '#1DA1F2', url: 'https://x.com/dodwadiya_kumar' },
            { name: 'Email', icon: FaEnvelope, color: '#3b82f6', url: 'mailto:dwdjitendra2003@gmail.com' }
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: `0 10px 25px ${social.color}40`
                }}
                className="w-12 h-12 sm:w-14 sm:h-14 glass-blue rounded-full flex items-center justify-center text-xl sm:text-2xl cursor-pointer transition-all duration-300 relative group"
                style={{ color: social.color }}
              >
                <IconComponent className="group-hover:scale-110 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.name}
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.button
        onClick={() => smoothScrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer bg-transparent border-none"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-12 sm:w-8 sm:h-16 border-2 border-blue-400 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-4 sm:w-1.5 sm:h-6 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-300 text-xs sm:text-sm mt-2 sm:mt-3 font-medium"
        >
          Scroll to explore
        </motion.p>
      </motion.button>
    </section>
  );
}