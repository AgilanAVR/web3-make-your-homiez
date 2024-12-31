/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true, },
  output: "standalone", // Correct value
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
