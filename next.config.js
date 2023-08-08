/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fullstackdotso.nyc3.cdn.digitaloceanspaces.com',
      },
    ],
  },
}

module.exports = nextConfig
