/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// SEO & Performance optimizations
	compress: true,
	poweredByHeader: false,

	// Headers for SEO and security
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY'
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block'
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin'
					}
				]
			},
			{
				source: '/sitemap.xml',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400, stale-while-revalidate'
					}
				]
			},
			{
				source: '/robots.txt',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400, stale-while-revalidate'
					}
				]
			}
		];
	},

	// Redirects for SEO
	async redirects() {
		return [
			{
				source: '/wordle',
				destination: '/',
				permanent: true
			},
			{
				source: '/game',
				destination: '/',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
