/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone', // Ensure compatibility with hosting platforms like Docker or Render
  trailingSlash: true, // Add trailing slashes for exported routes
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/dashboard/patient': { page: '/dashboard/patient' },
      '/dashboard/doctor': { page: '/dashboard/doctor' },
      '/dashboard/admin': { page: '/dashboard/admin' },
      '/appointment/schedule': { page: '/appointment/schedule' },
      '/appointment/view': { page: '/appointment/view' },
      '/lab/upload': { page: '/lab/upload' },
      '/lab/view': { page: '/lab/view' },
      '/profile/edit': { page: '/profile/edit' },
      '/profile/view': { page: '/profile/view' },
    };
  },
  images: {
    unoptimized: true, // Disable image optimization for static export compatibility
  },
  eslint: {
    ignoreDuringBuilds: true, // Avoid blocking the build due to linting errors
  },
};

module.exports = nextConfig;
