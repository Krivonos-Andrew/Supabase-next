const hostnames = [
  'pic.rutubelist.ru',
  'i.pinimg.com',
  "pbs.twimg.com",
  "avatars.mds.yandex.net"]

/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
images: {
remotePatterns: hostnames.map(hostname => ({
protocol: 'https',
hostname
}))
}
}



module.exports = nextConfig
