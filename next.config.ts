import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.postimg.cc', 'media.dodostatic.net', 'cdn.dodostatic.net'],
  },
  compiler: {
    removeConsole: false, // или `process.env.NODE_ENV === 'production'`, если нужно удалять только в продакшене
  },
};

export default nextConfig;