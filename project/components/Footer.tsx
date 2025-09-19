'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

export default function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/dwdjitendra/', color: '#0077b5' },
    { icon: FaGithub, name: 'GitHub', href: 'https://github.com/dwdjitendra-cloud', color: '#333' },
    { icon: FaTwitter, name: 'X', href: 'https://x.com/dodwadiya_kumar', color: '#1DA1F2' },
    { icon: HiMail, name: 'Email', href: 'mailto:dwdjitendra2003@gmail.com', color: '#ea4335' }
  ];

  const quickLinks = [
    'About', 'Skills', 'Projects', 'Experience', 'Contact'
  ];

  return (
    <footer className="relative py-16 px-6 mt-20 glass-dark border-t border-blue-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-blue-500/10 via-transparent to-blue-700/10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.div
              className="flex items-center justify-center md:justify-start space-x-3 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 glass-blue rounded-xl flex items-center justify-center">
                {/* Removed initials 'JK' */}
                <span className="text-xl font-bold text-electric" aria-hidden>
                  {'</>'}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-electric">
                Jitendra
              </h3>
            </motion.div>
            
            <p className="text-blue-200 mb-6 leading-relaxed">
              Passionate Full Stack Developer crafting exceptional digital experiences 
              with modern technologies and innovative solutions.
            </p>

            <motion.div
              className="flex items-center justify-center md:justify-start space-x-2 text-blue-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulsate"></span>
              <span className="text-sm">Available for new opportunities</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-blue-300 mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-blue-300 mb-6">Let's Connect</h4>
            
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
                  }}
                  className="w-12 h-12 glass-blue rounded-xl flex items-center justify-center text-xl cursor-pointer group"
                  title={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform" style={{ color: '#fff' }}>
                    <social.icon className="w-5 h-5" style={{ color: social.color }} />
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-400"
            >
              <p>📍 Available Worldwide</p>
              <p>🕒 Open to Remote & On-site</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-blue-500/20 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Jitendra Kumar Dodwadiya. Crafted with ❤️ and precision.
            </p>
            
            <motion.div
              className="flex items-center space-x-4 text-sm text-gray-400"
              whileHover={{ scale: 1.05 }}
            >
              <span>Built with</span>
              <div className="flex items-center space-x-3">
                <SiNextdotjs className="w-5 h-5 text-white" title="Next.js" />
                <FaReact className="w-5 h-5 text-cyan-400" title="React" />
                <SiTailwindcss className="w-5 h-5 text-sky-400" title="Tailwind CSS" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 bg-blue-400/5 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </footer>
  );
}