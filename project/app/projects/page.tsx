'use client';

import { motion } from 'framer-motion';
import ProjectCard3D from '@/components/ProjectCard3D';

export default function Projects() {
  // Contributions section data
  const contribution = {
    title: 'GitHub Contribution — Better Software Company',
    date: 'Oct 2025',
    description:
      'Developed and submitted a React + Flask-based comments management module implementing full CRUD functionality for tasks. Designed a responsive frontend interface in React and TypeScript, integrated it seamlessly with Flask REST APIs, and followed professional Git branching and pull request workflows. The contribution demonstrated strong full-stack engineering discipline, clean coding standards, and practical collaboration in a production-style environment.',
    techStack: ['React', 'TypeScript', 'Flask', 'REST API', 'Git', 'Tailwind CSS'],
    confidentiality: 'Note: Repository is private due to company confidentiality.',
  };
  const projects = [
    {
      title: 'SmartHealthBot',
      tagline: 'AI-driven healthcare platform offering intelligent symptom analysis, doctor consultations, and secure online payments.',
      description:
        'Built a full-stack healthcare solution integrating AI-based symptom prediction, doctor consultation booking, and Razorpay payment gateway. The system leverages a Flask microservice for machine-learning inference and provides JWT-secured authentication for users. Features include real-time health analysis, patient record tracking.',
      techStack: ['React', 'Node.js', 'Flask', 'MongoDB', 'ML', 'Razorpay', 'Tailwind'],
      liveDemo: 'https://smart-health-bot.vercel.app/',
      githubRepo: 'https://github.com/dwdjitendra-cloud/SmartHealth-Bot',
    },
    {
      title: 'Video Proctoring System',
      tagline: 'AI-powered virtual invigilation platform ensuring fair and secure online assessments.',
      description:
        'Developed a full-fledged SaaS-style proctoring platform that monitors candidates in real time using webcam and microphone feeds. Integrated TensorFlow/MediaPipe for face tracking, gaze detection, and activity recognition to flag suspicious behavior. The system logs all events, generates PDF/CSV reports, and computes integrity scores for post-exam analysis.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow', 'MediaPipe', 'JWT'],
      liveDemo: 'https://focus-object-detection-in-video-int-gray.vercel.app/',
      githubRepo: 'https://github.com/dwdjitendra-cloud/Focus-Object-Detection-in-Video-Interviews',
    },
    {
      title: 'Hostel Management System',
      tagline: 'Digital platform automating hostel operations, room allocation, and student management.',
      description:
        'Designed and implemented a full-stack web application for managing hostel activities including student registration, room assignment and complaint management. Developed secure admin and warden dashboards with REST APIs and JWT authentication. Enhanced efficiency by digitizing manual processes and enabling real-time data access.',
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
      tagline: 'Machine learning-based application to detect phishing and scam messages using NLP techniques.',
      description:
        'Created a text-classification system capable of identifying fraudulent emails and SMS messages using natural language processing and supervised learning models. Trained on public phishing datasets and deployed via a Flask-based web interface for real-time predictions. The model achieved strong accuracy in detecting malicious content and preventing user deception.',
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
    <>
      {/* Contributions Section (styled like experience, not cards) */}
      <section id="contributions" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Contributions
          </h2>
          <div className="bg-neutral-900 rounded-2xl shadow-2xl p-8 md:p-10 max-w-3xl mx-auto text-left border border-blue-900/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <span className="flex items-center font-semibold text-xl md:text-2xl text-blue-300">
                <svg className="w-7 h-7 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                {contribution.title}
              </span>
              <span className="text-sm text-gray-400 md:ml-4 font-mono bg-blue-900/30 px-3 py-1 rounded-xl">{contribution.date}</span>
            </div>
            <div className="text-gray-200 text-base md:text-lg mb-4 whitespace-pre-line leading-relaxed">
              {contribution.description}
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-blue-200">Tech Stack:</span>
              {contribution.techStack.map((tech) => (
                <span key={tech} className="text-xs md:text-sm bg-blue-900/40 text-blue-100 px-2 py-1 rounded-lg font-mono shadow">
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-xs md:text-sm text-red-400 font-semibold border-l-4 border-red-500 pl-2 mt-2 italic">
              {contribution.confidentiality}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
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
              Want the full story? <a href="/#about" className="underline hover:text-blue-300">Visit About Me</a>.
            </span>
          </p>
        </motion.div>

        {/* Interactive 3D Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 md:gap-y-12 md:gap-x-10 mb-12 md:mb-20">
          {projects.map((project, index) => (
            <div className="mb-8 md:mb-0">
              <ProjectCard3D
                key={project.title}
                {...project}
                index={index}
              />
            </div>
          ))}
          {/* Add extra gap below last card for mobile */}
          <div className="block md:hidden h-12"></div>
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
    </>
  );
}
