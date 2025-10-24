/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use default server output for full React 18 features (no static export)
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
