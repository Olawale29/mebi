import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WhoGoHost shared hosting can restrict the number of child processes a
  // account may create. Keep Next's build worker pool within that limit.
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
