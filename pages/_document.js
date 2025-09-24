import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Preconnect to external domains for performance */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

				{/* DNS prefetch for common external resources */}
				<link rel="dns-prefetch" href="//fonts.googleapis.com" />
				<link rel="dns-prefetch" href="//fonts.gstatic.com" />

				{/* Manifest for PWA capabilities */}
				<link rel="manifest" href="/manifest.json" />

				{/* Additional schema markup for breadcrumbs and website */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'Infinite Wordle',
							alternateName: 'Wordle Unlimited',
							url: 'https://wordle.valchy.com/',
							description:
								'Play Wordle unlimited! Unlike the original Wordle with one daily puzzle, our infinite Wordle lets you play endless word games 24/7.',
							inLanguage: 'en-US',
							potentialAction: {
								'@type': 'SearchAction',
								target: {
									'@type': 'EntryPoint',
									urlTemplate: 'https://wordle.valchy.com/?q={search_term_string}'
								},
								'query-input': 'required name=search_term_string'
							},
							publisher: {
								'@type': 'Organization',
								name: 'Infinite Wordle',
								url: 'https://wordle.valchy.com/'
							}
						})
					}}
				/>
			</Head>
			<body className="bg-neutral-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
