function generateSiteMap() {
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://wordle.valchy.com</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>daily</changefreq>
		<priority>1.0</priority>
	</url>
	<url>
		<loc>https://wordle.valchy.com/unlimited</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>0.9</priority>
	</url>
</urlset>`;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
	// Generate the XML sitemap
	const sitemap = generateSiteMap();

	res.setHeader('Content-Type', 'text/xml');
	// Cache the sitemap for 24 hours
	res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
	res.write(sitemap);
	res.end();

	return {
		props: {}
	};
}

export default SiteMap;
