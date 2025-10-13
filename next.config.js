/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR enabled - removed 'output: export' for server-side rendering
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
