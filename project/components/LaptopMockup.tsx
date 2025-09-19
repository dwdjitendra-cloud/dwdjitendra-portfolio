'use client';

import { motion } from 'framer-motion';

interface LaptopMockupProps {
  projectUrl: string;
  title: string;
}

export default function LaptopMockup({ projectUrl, title }: LaptopMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      className="relative max-w-4xl mx-auto mb-16"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative">
        {/* Laptop Base */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-2xl">
          {/* Screen */}
          <div className="bg-black rounded-lg p-2 mb-2">
            <div className="bg-white rounded overflow-hidden" style={{ aspectRatio: '16/10' }}>
              <iframe
                src={projectUrl}
                className="w-full h-full"
                frameBorder="0"
                title={title}
              />
            </div>
          </div>
          
          {/* Keyboard Area */}
          <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
            <div className="w-16 h-8 bg-gray-600 rounded"></div>
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 50px rgba(0, 212, 255, 0.3)',
              '0 0 80px rgba(139, 92, 246, 0.3)',
              '0 0 50px rgba(0, 212, 255, 0.3)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-lg -z-10"
        />
      </div>
    </motion.div>
  );
}