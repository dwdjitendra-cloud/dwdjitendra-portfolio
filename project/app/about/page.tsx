'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');

  const timeline = [
    {
      year: '2025',
      title: 'Software Engineer Intern',
      company: 'Appco Software',
      description: 'Developed and deployed full-stack MERN applications with JWT authentication and optimized backend performance',
      icon: '💼',
      color: '#3b82f6'
    },
    {
      year: '2025',
      title: 'AI Prompt Engineer',
      company: 'Soul AI (Freelance)',
      description: 'Improved Large Language Model outputs through structured prompt engineering and RLHF evaluation',
      icon: '🤖',
      color: '#8b5cf6'
    },
    {
      year: '2024',
      title: 'L\'Oreal Boost Scholar',
      company: 'L\'Oreal Foundation',
      description: 'Recognized among top Indian undergraduates for leadership and innovation in technology',
      icon: '🏆',
      color: '#f59e0b'
    },
    {
      year: '2022',
      title: 'Reliance Foundation Scholar',
      company: 'Reliance Foundation',
      description: 'Awarded scholarship given to top undergraduate students in India for academic excellence',
      icon: '⭐',
      color: '#10b981'
    }
  ];

  const skills = [
    { category: 'Frontend', technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: '🎨' },
    { category: 'Backend', technologies: ['Node.js', 'Express.js', 'Python', 'FastAPI'], icon: '⚙️' },
    { category: 'Database', technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma'], icon: '💾' },
    { category: 'AI/ML', technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'], icon: '🤖' },
    { category: 'Cloud', technologies: ['AWS', 'Docker', 'Kubernetes', 'Vercel'], icon: '☁️' },
    { category: 'Tools', technologies: ['Git', 'GitHub Actions', 'Postman', 'Figma'], icon: '🛠️' }
  ];

  const personalInfo = [
    { label: 'Location', value: 'Jaipur, Rajasthan', icon: '📍' },
  { label: 'Education', value: 'B.Tech CSE, Indian Institute of Engineering Science and Technology (IIEST) Shibpur', icon: '🎓' },
    { label: 'Email', value: 'dwdjitendra2003@gmail.com', icon: '✉️' },
    { label: 'Interests', value: 'AI Research, Full Stack Development', icon: '💫' }
  ];

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
          About Me
        </h2>
        <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
          Passionate Computer Science Engineer crafting innovative solutions at the intersection of technology and creativity
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mb-12"
      >
        <div className="glass-blue rounded-2xl p-2 inline-flex flex-wrap gap-2 justify-center">
          {[
            { id: 'overview', label: 'Overview', icon: '👨‍💻' },
            { id: 'journey', label: 'Journey', icon: '🛣️' },
            { id: 'skills', label: 'Skills', icon: '⚡' },
            { id: 'personal', label: 'Personal', icon: '🌟' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-sm md:text-base ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-blue-200 hover:text-white hover:bg-blue-600/50'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-[500px]"
      >
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="card-enhanced p-8">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">🚀 About Me</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a Computer Science Engineering student at Indian Institute of Engineering Science and Technology (IIEST) Shibpur, passionate about creating 
                  impactful digital solutions. My journey spans full-stack development, AI/ML engineering, 
                  and innovative problem-solving across various domains.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As a Software Engineer Intern at Appco Software and AI Prompt Engineer at Soul AI, I've 
                  gained valuable experience in developing scalable MERN applications and optimizing AI 
                  systems for better performance and user experience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm driven by the pursuit of excellence in technology and innovation. My projects range 
                  from AI-powered healthcare solutions to video proctoring systems, always focusing on 
                  real-world impact and technical excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
          </div>
        )}

        {activeTab === 'journey' && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-blue-300 mb-8 text-center">My Professional Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="card-enhanced p-6 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span 
                          className="text-sm font-bold px-3 py-1 rounded-full text-white"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-blue-300 mb-2">{item.title}</h4>
                      <p className="text-blue-200 font-medium mb-2">{item.company}</p>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div 
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white"
                    style={{ backgroundColor: item.color }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-enhanced p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-blue-300">{skill.category}</h3>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                      className="flex items-center space-x-2 p-2 glass-blue rounded-lg"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-200 text-sm">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'personal' && (
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="card-enhanced p-8"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-6">📋 Personal Info</h3>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 glass-blue rounded-xl"
                    >
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <p className="text-blue-200 font-medium">{info.label}</p>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card-enhanced p-8"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-6">🎯 Fun Facts</h3>
                <div className="space-y-4">
                  {[
                    { fact: 'Coffee consumed while coding', value: '☕ 1000+ cups', icon: '☕' },
                    { fact: 'Lines of code written', value: '💻 50,000+', icon: '💻' },
                    { fact: 'Projects completed', value: '🚀 25+', icon: '🚀' },
                    { fact: 'Hours spent debugging', value: '🐛 Too many to count!', icon: '🐛' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.fact}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 glass-blue rounded-xl hover:scale-105 transition-transform"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">{item.fact}</span>
                        <span className="text-blue-300 font-bold">{item.value}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}