/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://66ba2c40fa763ff550fb0d03.mockapi.io",
    DOMAIN_ORIGIN: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "f2.toyhou.se",
        port: "",
        pathname: "/file/**"
      }
    ]
  }
};

export default nextConfig;
