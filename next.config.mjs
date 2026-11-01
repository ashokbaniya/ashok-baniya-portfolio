/** @type {import('next').Next.config} */
const nextConfig = {
  output: 'export', // <--- Enables static HTML export
  // If you have image optimization issues with static export, you may also need:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;