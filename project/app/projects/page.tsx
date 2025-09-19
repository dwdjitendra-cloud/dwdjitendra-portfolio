'use client';

import { motion } from 'framer-motion';
import ProjectCard3D from '@/components/ProjectCard3D';

export default function Projects() {
  const projects = [
    {
      title: 'Video Proctoring System',
      description:
        'Full-stack AI-based proctoring system for online interviews with live monitoring, event logging, and integrity scoring. Integrated TensorFlow/MediaPipe for detection and automated PDF session reports for interviewers.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow', 'MediaPipe', 'JWT'],
      liveDemo: 'https://focus-object-detection-in-video-int-gray.vercel.app/',
      githubRepo: 'https://github.com/dwdjitendra-cloud/Focus-Object-Detection-in-Video-Interviews',
    },
    {
      title: 'SmartHealthBot',
      description:
        'AI-powered healthcare chatbot that predicts possible diseases from symptoms and provides remedies, with doctor consultation via Razorpay integration. MERN backend with Flask APIs, ML models, and a responsive UI for a smooth experience.',
      techStack: ['React', 'Node.js', 'Flask', 'MongoDB', 'ML', 'Razorpay', 'Tailwind'],
      liveDemo: 'https://smart-health-bot.vercel.app/',
      githubRepo: 'https://github.com/dwdjitendra-cloud/SmartHealth-Bot',
    },
    {
      title: 'Hostel Management System',
      description:
        'Full-stack web app for managing student hostels with modules for rooms, fees, complaints, and student details. Implements CRUD operations with database integration to streamline hostel administration.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind', 'Charts.js'],
      liveDemo: 'https://hms-opal.vercel.app/login',
      githubRepo: 'https://github.com/dwdjitendra-cloud/hostel-management',
    },
    {
      title: 'Fake Email & SMS Detector',
      description:
        'Machine learning tool to identify phishing and fraudulent emails/SMS with improved accuracy. Uses Python, scikit-learn, and NLP to classify messages as safe or malicious.',
      techStack: ['Python', 'Scikit-learn', 'NLP', 'Flask', 'Pandas', 'NumPy'],
      liveDemo: 'https://spam-detector-vxjd.onrender.com/',
      githubRepo: 'https://github.com/dwdjitendra-cloud/spam-detector',
    },
  ];
  return (
    <section id="projects" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg md:text-xl text-gray-300">Interactive 3D showcase of my work - Click cards to explore!</p>
      </motion.div>

      {/* Interactive 3D Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
        {projects.map((project, index) => (
          <ProjectCard3D
            key={project.title}
            {...project}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="card-enhanced p-6 md:p-8 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-blue-300 mb-4">More Projects Coming Soon</h3>
          <p className="text-sm md:text-base text-gray-300">
            Currently working on several exciting projects involving AI integration, blockchain technology, and advanced full-stack applications. Stay tuned!
          </p>
          <ul className="mt-4 text-left list-disc list-inside text-gray-300 text-sm md:text-base">
            <li>
              <span className="font-semibold text-blue-200">Shadow Removal Project (In Progress):</span> Detecting and removing shadows from images using ML/CV to improve recognition, segmentation, and object detection.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}