import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['odin-bali.com', 'example.com'], // Add image domains if loading from external sources
    unoptimized: process.env.NODE_ENV === 'development', // For development only
  },
};

export default withFlowbiteReact(nextConfig);