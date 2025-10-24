'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from '@/lib/smooth-scroll';
import { 
  HiHome, 
  HiUser, 
  HiLightningBolt, 
  HiCode, 
  HiBriefcase, 
  HiMail,
  HiDocument
} from 'react-icons/hi';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setIsScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };

    const handleSectionChange = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: HiHome },
    { name: 'About', href: '#about', icon: HiUser },
    { name: 'Skills', href: '#skills', icon: HiLightningBolt },
    { name: 'Projects', href: '#projects', icon: HiCode },
    { name: 'Experience', href: '#experience', icon: HiBriefcase },
    { name: 'Contact', href: '#contact', icon: HiMail },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    smoothScrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'mt-0'
            : 'mt-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2">
          <motion.div
            className={`glass-blue rounded-2xl p-4 transition-all duration-500 ${
              isScrolled ? 'shadow-2xl' : 'shadow-lg'
            }`}
            whileHover={{ y: -2 }}
          >
            <div className="flex justify-between items-center">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 glass-blue rounded-lg flex items-center justify-center">
                  {/* Neutral glyph with solid, high-contrast color */}
                  <span className="text-lg font-bold text-white" aria-hidden>
                    <HiCode className="w-5 h-5" />
                  </span>
                </div>
                <span className="text-xl font-bold text-white hidden sm:block">
                  Jitendra
                </span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-blue-300'
                        : 'text-gray-300 hover:text-blue-300'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <item.icon className="text-sm w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </span>
                    
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 glass-blue rounded-xl"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* CTA Button & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold btn-accent"
                  title="View Resume"
                >
                  <HiDocument className="w-4 h-4" />
                  <span>View Resume</span>
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden w-10 h-10 glass-blue rounded-lg flex items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                    className="w-6 h-6 flex flex-col justify-center items-center"
                  >
                    <motion.span
                      animate={{
                        rotate: isMobileMenuOpen ? 45 : 0,
                        y: isMobileMenuOpen ? 2 : -2
                      }}
                      className="w-4 h-0.5 bg-blue-300 block mb-1"
                    />
                    <motion.span
                      animate={{
                        opacity: isMobileMenuOpen ? 0 : 1
                      }}
                      className="w-4 h-0.5 bg-blue-300 block mb-1"
                    />
                    <motion.span
                      animate={{
                        rotate: isMobileMenuOpen ? -45 : 0,
                        y: isMobileMenuOpen ? -2 : 2
                      }}
                      className="w-4 h-0.5 bg-blue-300 block"
                    />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden mx-6 mt-2"
            >
              <div className="glass-blue rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.href.slice(1)
                          ? 'glass-blue text-blue-300'
                          : 'hover:glass text-gray-300 hover:text-blue-300'
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <item.icon className="text-2xl w-6 h-6" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Resume access moved to Let's Connect section on Contact page */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}