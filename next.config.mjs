/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  env: {
    FIREBASE_TOKEN: process.env.FIREBASE_TOKEN,
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
