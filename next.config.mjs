/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
              key: "cache-control",
              value: "private, no-cache, no-store, max-age=0, must-revalidate"
          },
        ],
      },
    ];
  },
  images:{
      remotePatterns: [
          {
            protocol: "https",
            hostname: "m.media-amazon.com",
          },
        ],
  }
};

export default nextConfig;
