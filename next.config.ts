import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  typescript: {
    // Disable type checking during build because of WASM worker issue on Android
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
