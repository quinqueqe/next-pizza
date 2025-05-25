import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // отключение ререндера компонентов
  images: {
    domains: ['i.postimg.cc', 'media.dodostatic.net', 'cdn.dodostatic.net', 'localhost'],
  },
  compiler: {
    removeConsole: false, // или `process.env.NODE_ENV === 'production'`, если нужно удалять только в продакшене
  },
};

export default nextConfig;