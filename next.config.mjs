/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cately.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
