/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    ppr: true,
  },
};
module.exports = {
  images: {
    unoptimized: false,
  },
};
