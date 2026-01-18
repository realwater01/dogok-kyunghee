import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable caching for development and ensure fresh builds
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  // Generate a build ID based on git commit
  generateBuildId: async () => {
    // Use current timestamp to force fresh builds
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
