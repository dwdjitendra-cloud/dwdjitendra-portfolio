'use client';

import { motion } from 'framer-motion';
import StatsDashboard from '../../components/StatsDashboard';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-electric text-center">About Me</h2>
        <div className="card-enhanced p-8 text-lg md:text-xl text-gray-200 leading-relaxed shadow-lg">
          Hi, I’m <span className="font-bold text-blue-300">Jitendra Kumar Dodwadiya</span>, a final-year B.Tech Computer Science Engineering student at <span className="font-bold text-blue-200">Indian Institute of Engineering Science and Technology (IIEST) Shibpur</span>, passionate about building scalable and intelligent digital products that make a real impact.<br /><br />
          I specialize in the <span className="font-bold text-blue-300">MERN Stack</span> and enjoy combining <span className="font-bold text-blue-300">AI and Machine Learning</span> with full-stack development to create innovative solutions.<br /><br />
          Over the years, I’ve worked as a <span className="font-bold text-blue-300">Software Engineer Intern at Appco Software</span>, where I developed production-ready MERN applications, and as an <span className="font-bold text-blue-300">AI Prompt Engineer at Soul AI</span>, where I refined LLM outputs through structured prompt design and evaluation.<br /><br />
          <span className="italic text-blue-200">"I believe great engineering is not just about code—it’s about clarity, impact, and responsibility."</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <StatsDashboard />
      </motion.div>
    </section>
  );
}