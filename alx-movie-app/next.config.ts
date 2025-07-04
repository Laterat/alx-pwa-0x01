import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'], // ✅ Allow external image domain
  },
};

export default nextConfig;
