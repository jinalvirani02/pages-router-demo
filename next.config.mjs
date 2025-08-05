/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
              key: "cache-control",
              value: "public, s-maxage=86400, stale-while-revalidate=300"
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
