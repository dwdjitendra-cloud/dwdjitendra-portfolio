'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Appco Software',
      duration: 'May 2025 - July 2025',
      description: 'Developed and deployed full-stack MERN note-taking application with JWT authentication and REST APIs. Improved application response times through MongoDB optimization.',
      achievements: [
        'Built full-stack MERN application (iNotebook)',
        'Implemented JWT authentication and REST APIs',
        'Optimized MongoDB queries and Node.js backend',
        'Improved API response times significantly'
      ],
      color: 'cyan'
    },
    {
      role: 'AI Prompt Engineer / Model Evaluator',
      company: 'Soul AI',
      duration: 'June 2025 - August 2025',
      description: 'Freelance role focused on improving Large Language Model outputs through structured prompt engineering and RLHF evaluation.',
      achievements: [
        'Enhanced LLM contextual accuracy through prompt engineering',
        'Evaluated and annotated AI content for RLHF fine-tuning',
        'Collaborated with AI teams to refine model behavior',
        'Improved user satisfaction and engagement'
      ],
      color: 'purple'
    }
  ];

  const achievements = [
    {
      title: 'Reliance Foundation Scholar',
      description: 'Awarded scholarship given to top undergraduate students in India for academic excellence.',
      icon: '🏆',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: "L'Oreal Boost Scholar",
      description: 'Recognized among top Indian undergraduates for leadership and innovation in technology.',
      icon: '⭐',
      color: 'from-pink-400 to-purple-500'
    },
    {
      title: 'HackNITR 5.0 Participant',
      description: 'Engineered real-time peer-to-peer payment application at NIT Rourkela hackathon.',
      icon: '🎓',
      color: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>
      </motion.div>

      {/* Experience Timeline (Vertical, single-column for better reading flow) */}
      <div className="mb-20">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-cyan-400 mb-8 text-center"
        >
          Professional Experience
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 text-sm md:text-base max-w-3xl mx-auto mb-10"
        >
          As a MERN developer and AI enthusiast, I bring scalable, pragmatic solutions to every problem I tackle.
          <span className="ml-1 text-blue-200">
            <a href="/#about" className="underline hover:text-blue-300">Learn more about me</a>.
          </span>
        </motion.p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500" />

          <div className="space-y-10 pl-12 md:pl-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline node */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute -left-8 md:-left-10 top-3 w-4 h-4 rounded-full ring-4 ring-white/10 ${
                    exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'
                  }`}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="card-enhanced p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-cyan-300">{exp.role}</h4>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                  </div>
                  <h5 className="text-lg font-semibold text-purple-300 mb-3">{exp.company}</h5>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-300 flex items-start"
                      >
                        <span className="mt-1 mr-2 w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">Achievements & Recognition</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <div className="backdrop-blur-sm bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl mx-auto mb-4`}
                >
                  {achievement.icon}
                </motion.div>
                <h4 className="text-lg font-bold text-cyan-400 mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}