import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  // SCSS: allows `@use "../styles/_variables"`
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    remotePatterns: [],
  },

  output: 'standalone',

  // Keep builds disciplined
  eslint: { dirs: ['src'] },
  // typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
