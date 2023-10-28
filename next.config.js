/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pbs.twimg.com',
				port: '',
				pathname: '/media/**'
			}
		],
		formats: ['image/avif', 'image/webp']
	}
};

module.exports = nextConfig;
