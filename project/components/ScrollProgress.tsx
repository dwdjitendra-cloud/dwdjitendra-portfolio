'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const springStrokeDashoffset = useSpring(strokeDashoffset, {
    stiffness: 100,
    damping: 30
  });

  return (
    <>
      {/* Main Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Circular Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="relative w-full h-full">
          {/* Background Circle */}
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
              stroke="#3b82f6"
              strokeWidth="2"
              strokeDasharray="100, 100"
              style={{
                strokeDashoffset: springStrokeDashoffset
              }}
            />
          </svg>
          
          {/* Center Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 glass-blue rounded-full flex items-center justify-center text-blue-300 hover:text-white transition-colors"
            >
              ↑
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
}