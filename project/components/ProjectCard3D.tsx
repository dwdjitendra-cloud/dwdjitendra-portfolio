'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCard3DProps {
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  githubRepo: string;
  index: number;
}

export default function ProjectCard3D({ 
  title, 
  description, 
  techStack, 
  liveDemo, 
  githubRepo, 
  index 
}: ProjectCard3DProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ y: -15, rotateX: 5, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
  className="relative h-96 w-full cursor-pointer group [perspective:1200px] will-change-transform isolate"
      style={{ perspective: "1200px", zIndex: isHovered || isFlipped ? 2 : 1 }}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      aria-label={`${title} – ${isFlipped ? 'show front' : 'show details'}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsFlipped((v) => !v);
        }
      }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeInOut"
        }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 rounded-2xl card-enhanced overflow-hidden [backface-visibility:hidden]"
        >
          {/* Header with animated gradient */}
          <div className="relative p-6 border-b border-blue-500/20">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-blue-600/10"
              animate={{
                backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%'
              }}
              transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            />
            
            <motion.h3 
              className="relative text-2xl font-bold text-glow mb-2"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.h3>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulsate"></div>
              <span className="text-blue-300 text-sm font-medium">Featured Project</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                {description}
              </p>

              <div className="mb-6">
                <h4 className="text-blue-300 font-semibold mb-3 text-sm">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: (index * 0.2) + (techIndex * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 glass-blue rounded-full text-xs text-blue-200 border border-blue-400/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {techStack.length > 4 && (
                    <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 border border-gray-500/30">
                      +{techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center justify-center space-x-2 text-blue-400 text-sm"
              >
                <span>🔄</span>
                <span>Click to flip & explore</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {/* Elegant gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-purple-800/50 to-fuchsia-900/60" />
          <div className="absolute -inset-8 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_60%)]" />
          <div className="absolute -inset-16 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.18),transparent_60%)]" />

          {/* Content container */}
          <div className="relative h-full w-full card-enhanced/soft flex flex-col min-h-0">
            {/* Header */}
            <div className="p-6 border-b border-purple-400/20">
              <h4 className="text-xl font-bold text-purple-200 mb-2">Complete Overview</h4>
              <p className="text-purple-300/90 text-sm">Full technology stack & live preview</p>
            </div>

          {/* Full Tech Stack */}
          <div className="relative p-6 flex-1 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto pr-1 pb-2">
              <h5 className="text-purple-200 font-semibold mb-4 text-sm">All Technologies</h5>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {techStack.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: techIndex * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-2 p-2 backdrop-blur-sm bg-white/5 border border-purple-400/20 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
                    <span className="text-xs text-purple-100">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 shrink-0">
              <motion.a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${title}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 rounded-xl text-center font-semibold bg-gradient-to-r from-fuchsia-500/90 to-purple-600/90 hover:from-fuchsia-500 hover:to-purple-600 text-white shadow-lg shadow-fuchsia-500/20"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="flex items-center justify-center space-x-2">
                  <FaExternalLinkAlt className="w-4 h-4" aria-hidden />
                  <span>Live Demo</span>
                </span>
              </motion.a>
              
              <motion.a
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GitHub repository for ${title}`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 rounded-xl text-center font-semibold backdrop-blur-sm bg-white/10 hover:bg-white/15 border border-purple-300/30 text-purple-50"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="flex items-center justify-center space-x-2">
                  <FaGithub className="w-5 h-5" aria-hidden />
                  <span>GitHub Repo</span>
                </span>
              </motion.a>
            </div>
          </div>
        </div>
        </div>
      </motion.div>

      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        animate={{
          boxShadow: isHovered ? [
            '0 0 20px rgba(59, 130, 246, 0.3)',
            '0 0 40px rgba(59, 130, 246, 0.5)',
            '0 0 20px rgba(59, 130, 246, 0.3)'
          ] : '0 0 0px rgba(59, 130, 246, 0)'
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
    </motion.div>
  );
}