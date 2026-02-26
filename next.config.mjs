/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        // port: '',
        pathname: '/images/media/**',
        search: '',
      },
    ],
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        // port: '',
        pathname: '/api/portraits/**',
        search: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
