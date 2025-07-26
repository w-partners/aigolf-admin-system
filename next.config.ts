import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  transpilePackages: ["next-auth"],
};

export default nextConfig;