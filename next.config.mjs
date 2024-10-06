/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: '**' }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
