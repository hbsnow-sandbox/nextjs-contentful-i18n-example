import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
    webVitalsAttribution: ["CLS", "LCP"],
  },
};

export default nextConfig;
