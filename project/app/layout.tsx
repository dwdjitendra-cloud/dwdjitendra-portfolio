import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jitendra Kumar Dodwadiya | Full Stack Developer',
  description:
    'Jitendra Kumar Dodwadiya - Full Stack Developer | MERN Specialist | AI & ML Enthusiast - Final-year CSE student at Indian Institute of Engineering Science and Technology (IIEST) Shibpur',
  metadataBase: new URL('https://example.com'),
  applicationName: 'Jitendra Portfolio',
  keywords: [
    'Jitendra Kumar Dodwadiya',
    'Full Stack Developer',
    'MERN',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Tailwind',
    'AI',
    'Machine Learning',
    'IIEST Shibpur'
  ],
  authors: [{ name: 'Jitendra Kumar Dodwadiya', url: 'https://example.com' }],
  openGraph: {
    title: 'Jitendra Kumar Dodwadiya | Full Stack Developer',
    description:
      'Portfolio of Jitendra Kumar Dodwadiya, Full Stack Developer (MERN) and AI/ML enthusiast. Explore projects, skills, and experience.',
    url: 'https://example.com',
    siteName: 'Jitendra Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Jitendra Kumar Dodwadiya - Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jitendra Kumar Dodwadiya | Full Stack Developer',
    description:
      'Full Stack Developer (MERN) and AI/ML enthusiast. Explore projects, skills, and experience.',
    images: ['/og.png'],
    creator: '@dodwadiya_kumar'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/',
  },
  themeColor: '#0a0b1e',
  verification: {
    // Fill if you set up these services
    google: '',
    yandex: '',
    other: {
      me: ['mailto:dwdjitendra2003@gmail.com']
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        {/* Skip to content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-3 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        {/* JSON-LD Person schema for richer search appearance */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jitendra Kumar Dodwadiya',
              url: 'https://example.com',
              sameAs: [
                'https://github.com/dwdjitendra-cloud',
                'https://www.linkedin.com/in/dwdjitendra/',
                'https://x.com/dodwadiya_kumar',
                'https://leetcode.com/u/little_krishna/'
              ],
              jobTitle: 'Full Stack Developer',
              alumniOf: 'Indian Institute of Engineering Science and Technology (IIEST) Shibpur'
            })
          }}
        />
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}