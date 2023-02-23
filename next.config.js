/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com','fakestoreapi.com']
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'links.papareact.com',
    //     port: '',
    //   }
    // ],
  },
}

module.exports = nextConfig
