/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  // basePath: "/admin-one-react-tailwind",
  basePath: "/dashboard",
  async redirects() {
    return [
      {
          source: '/',
          // destination: '/admin-one-react-tailwind',
          destination: '/dashboard',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig