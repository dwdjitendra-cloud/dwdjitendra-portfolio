'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SkillBadge3DProps {
  name: string;
  icon: string;
  color: string;
  delay: number;
  level?: number;
}

export default function SkillBadge3D({ 
  name, 
  icon, 
  color, 
  delay, 
  level = 85 
}: SkillBadge3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        rotateX: 5,
        y: -10
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer perspective-1000"
    >
      <div className="relative card-enhanced rounded-2xl p-6 overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: isHovered ? [
              `linear-gradient(45deg, ${color}20, transparent)`,
              `linear-gradient(45deg, transparent, ${color}30)`,
              `linear-gradient(45deg, ${color}20, transparent)`
            ] : `linear-gradient(45deg, ${color}10, transparent)`
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Skill Level Indicator */}
        <div className="absolute top-2 right-2 w-12 h-12">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
            />
            <motion.path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeDasharray={`${level}, 100`}
              initial={{ strokeDasharray: '0, 100' }}
              whileInView={{ strokeDasharray: `${level}, 100` }}
              transition={{ duration: 1.5, delay: delay + 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold" style={{ color }}>
              {level}%
            </span>
          </div>
        </div>

        {/* Icon */}
        <motion.div
          animate={{ 
            rotateZ: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl mb-4 text-center relative z-10"
        >
          {icon}
        </motion.div>
        
        {/* Name */}
        <motion.h3 
          className="text-lg font-bold text-center mb-2 relative z-10"
          style={{ color }}
          animate={{ 
            textShadow: isHovered ? `0 0 20px ${color}` : 'none',
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>

        {/* Skill Level Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          className="text-center relative z-10"
        >
          <div className="text-xs text-blue-300 mb-2">Proficiency</div>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: delay + 0.7 + (i * 0.1) }}
                className={`w-2 h-2 rounded-full mx-0.5 ${
                  i < Math.floor(level / 20) ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ 
            background: `radial-gradient(circle at center, ${color}15, transparent 70%)`,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Particle Effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: color }}
                initial={{
                  x: '50%',
                  y: '50%',
                  scale: 0
                }}
                animate={{
                  x: `${50 + (Math.cos(i * 60 * Math.PI / 180) * 40)}%`,
                  y: `${50 + (Math.sin(i * 60 * Math.PI / 180) * 40)}%`,
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            ))}
          </motion.div>
        )}
      </div>

      {/* Enhanced Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl -z-10"
        animate={{
          boxShadow: isHovered ? [
            `0 0 20px ${color}40`,
            `0 0 40px ${color}60`,
            `0 0 20px ${color}40`
          ] : `0 0 0px ${color}00`
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  );
}