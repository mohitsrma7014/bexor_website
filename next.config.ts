import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  devIndicators: {
    buildActivity: false, // ⬅️ disables the N circle
  },
};

export default nextConfig;
