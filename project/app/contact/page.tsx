'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open a prefilled mailto to allow contacting with a valid email client
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:dwdjitendra2003@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dwdjitendra/',
      icon: FaLinkedin,
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dwdjitendra-cloud',
      icon: FaGithub,
      color: '#333'
    },
    {
      name: 'X',
      url: 'https://x.com/dodwadiya_kumar',
      icon: FaTwitter,
      color: '#1DA1F2'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/little_krishna/',
      icon: SiLeetcode,
      color: '#ffa116'
    },
    {
      name: 'Email',
      url: 'mailto:dwdjitendra2003@gmail.com',
      icon: FaEnvelope,
      color: '#ea4335'
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
        </div>
        <p className="text-lg md:text-xl text-gray-300">Ready to collaborate on your next project?</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-sm bg-white/5 border border-cyan-500/20 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  inputMode="email"
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/20 border border-gray-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Social Links & Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="backdrop-blur-sm bg-white/5 border border-purple-500/20 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Connect With Me</h3>
            
            <div className="space-y-4 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl" style={{ backgroundColor: link.color }}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-gray-400 text-sm">Click to connect</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="text-center">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                View Resume
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="backdrop-blur-sm bg-white/5 border border-cyan-500/20 rounded-2xl p-6 text-center"
          >
            <h4 className="text-xl font-bold text-cyan-400 mb-3">Quick Response</h4>
            <p className="text-gray-300 text-sm">
              I typically respond to messages within 24 hours. Looking forward to hearing from you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}