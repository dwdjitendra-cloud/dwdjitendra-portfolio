/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  reactStrictMode: true,
  // Suppress React DevTools message in development
  webpack: (config, { dev }) => {
    if (dev) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-dom$': 'react-dom/profiling',
        'scheduler/tracing': 'scheduler/tracing-profiling',
      };
    }
    return config;
  },
};

const { withAnalytics } = require('@vercel/analytics');

module.exports = withAnalytics({
  nextConfig,
});
