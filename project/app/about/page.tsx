'use client';

import { motion } from 'framer-motion';
import StatsDashboard from '../../components/StatsDashboard';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-electric">
          About
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="card-enhanced p-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-6">🎯 What Drives Me</h3>
            <div className="space-y-4">
              {[
                { icon: '💡', title: 'Innovation', desc: 'Creating novel solutions to complex problems' },
                { icon: '🤝', title: 'Collaboration', desc: 'Building amazing things with great teams' },
                { icon: '📚', title: 'Learning', desc: 'Continuously expanding knowledge and skills' },
                { icon: '🌍', title: 'Impact', desc: 'Making technology accessible and meaningful' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 glass-blue rounded-xl"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-blue-200">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <StatsDashboard />
        </motion.div>
      </motion.div>
    </section>
  );
}