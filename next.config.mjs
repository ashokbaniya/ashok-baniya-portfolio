/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // No external image domains are used — all project/CV assets are served
    // from /public. If you later host images remotely, add their domains
    // here (or switch to `remotePatterns`).
    unoptimized: false,
  },
};

export default nextConfig;
