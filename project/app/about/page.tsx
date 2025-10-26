'use client';

import { motion } from 'framer-motion';
import StatsDashboard from '../../components/StatsDashboard';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-8"
      >
        <StatsDashboard />
      </motion.div>
    </section>
  );
}