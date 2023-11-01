/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.tech.nisit.ku.ac.th',
      },
    ],
  },
};

module.exports = nextConfig;
