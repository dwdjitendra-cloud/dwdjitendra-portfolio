'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
// Dynamically import Hero to reduce initial JS and avoid SSR for WebGL
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
import About from '@/app/about/page';
import Skills from '@/app/skills/page';
import Projects from '@/app/projects/page';
import Experience from '@/app/experience/page';
import Contact from '@/app/contact/page';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen cosmic-bg">
      <ScrollProgress />
      <Navbar />
      
      <Suspense fallback={
        <div className="h-screen flex items-center justify-center">
          <div className="glass-blue rounded-2xl p-8">
            <div className="loading-shimmer h-4 w-32 rounded mb-4"></div>
            <div className="text-xl text-blue-300 animate-pulsate">Loading amazing content...</div>
          </div>
        </div>
      }>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
      
      <Footer />
    </main>
  );
}