import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.151"],
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "/#apply",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
