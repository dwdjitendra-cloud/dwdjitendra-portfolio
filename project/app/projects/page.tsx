'use client';

import { motion } from 'framer-motion';
import ProjectCard3D from '@/components/ProjectCard3D';

export default function Projects() {
  const projects = [
    {
      title: 'SmartHealthBot',
      description:
        'AI-powered healthcare chatbot that predicts possible diseases from symptoms and provides remedies. Solely developed the frontend, backend, and deployed the application.',
      techStack: ['React', 'Node.js', 'Flask', 'MongoDB', 'ML', 'Razorpay', 'Tailwind'],
      liveDemo: 'https://smart-health-bot.vercel.app/',
      githubRepo: 'https://github.com/dwdjitendra-cloud/SmartHealth-Bot',
    },
    {
      title: 'Video Proctoring System',
      description:
        'Full-stack AI-based proctoring system for online interviews with live monitoring, event logging, and integrity scoring. Solely developed the frontend, backend, and deployed the application.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow', 'MediaPipe', 'JWT'],
      liveDemo: 'https://focus-object-detection-in-video-int-gray.vercel.app/',
      githubRepo: 'https://github.com/dwdjitendra-cloud/Focus-Object-Detection-in-Video-Interviews',
    },
    {
      title: 'Hostel Management System',
      description:
        'Full-stack web app for managing student hostels with modules for rooms, fees, complaints, and student details. Solely developed the frontend, backend, and deployed the application.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind', 'Charts.js'],
      liveDemo: 'https://hms-opal.vercel.app/login',
      githubRepo: 'https://github.com/dwdjitendra-cloud/hostel-management',
    },
    {
      title: 'Kube Credential System',
      description:
        'A complete microservices-based credential issuance and verification system built with Node.js, TypeScript, MongoDB Atlas, Docker, and Kubernetes. This system demonstrates production-grade microservices architecture with containerization and orchestration capabilities.',
      techStack: ['React', 'Node.js', 'TypeScript', 'MongoDB Atlas', 'Docker', 'Kubernetes'],
      liveDemo: 'https://kube-credential-chi-pied.vercel.app',
      githubRepo: 'https://github.com/dwdjitendra-cloud/kube-credential',
    },
    {
      title: 'Fake Email & SMS Detector',
      description:
        'Machine learning tool to identify phishing and fraudulent emails/SMS with improved accuracy. Solely developed the frontend, backend, and deployed the application.',
      techStack: ['Python', 'Scikit-learn', 'NLP', 'Flask', 'Pandas', 'NumPy'],
      liveDemo: 'https://spam-detector-vxjd.onrender.com/',
      githubRepo: 'https://github.com/dwdjitendra-cloud/spam-detector',
    },
  ];

  const upcomingProjects = [
    {
      title: 'Shadow Removal Project (In Progress)',
      description:
        'Detecting and removing shadows from images using ML/CV to improve recognition, segmentation, and object detection.',
      techStack: ['Machine Learning', 'Computer Vision'],
      tags: ['Final Year College Project'],
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
        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
          As a MERN developer and AI enthusiast, I build scalable, user‑centric products. Below are some highlights.
          <span className="hidden md:inline"> Click a card to explore details.</span>
          <span className="block mt-2 text-sm text-blue-200">
            Want the full story? <a href="/about" className="underline hover:text-blue-300">Visit About Me</a>.
          </span>
        </p>
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
            {upcomingProjects.map((project) => (
              <li key={project.title}>
                <span className="font-semibold text-blue-200">{project.title}:</span> {project.description}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}