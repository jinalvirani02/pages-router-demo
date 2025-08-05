/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
              key: "cache-control",
              value: "max-age=0, s-maxage=40, stale-while-revalidate=10"
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
