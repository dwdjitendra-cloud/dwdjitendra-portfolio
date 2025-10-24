import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeToggle from './components/ThemeToggle';

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
  verification: {
    // Fill if you set up these services
    google: '',
    yandex: '',
    other: {
      me: ['mailto:dwdjitendra2003@gmail.com']
    }
  },
};

export const viewport = {
  themeColor: '#0a0b1e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}