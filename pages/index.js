import Header from '../components/Header';
import Game from '../components/Game';
import Keyboard from '../components/Keyboard';
import Head from 'next/head';

export default function WordleGame() {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
				<meta name="HandheldFriendly" content="True" />
				<meta name="MobileOptimized" content="380" />
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />

				{/* Primary SEO Tags */}
				<title>Infinite Wordle - Play Wordle Unlimited Daily | Free Word Game</title>
				<meta name="title" content="Infinite Wordle - Play Wordle Unlimited Daily | Free Word Game" />
				<meta
					name="description"
					content="Play Wordle unlimited! Unlike the original Wordle with one daily puzzle, our infinite Wordle lets you play endless word games 24/7. Free, no limits, new words every game!"
				/>
				<meta
					name="keywords"
					content="wordle unlimited, infinite wordle, wordle game, free wordle, daily wordle, word puzzle, word game, wordle online, wordle solver, 5 letter words"
				/>
				<meta name="author" content="Valeri Sabev" />
				<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
				<meta name="language" content="English" />
				<meta name="revisit-after" content="1 day" />

				{/* Canonical URL */}
				<link rel="canonical" href="https://wordle.valchy.com/" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://wordle.valchy.com/" />
				<meta property="og:title" content="Infinite Wordle - Play Wordle Unlimited Daily | Free Word Game" />
				<meta
					property="og:description"
					content="Play Wordle unlimited! Unlike the original Wordle with one daily puzzle, our infinite Wordle lets you play endless word games 24/7. Free, no limits, new words every game!"
				/>
				<meta property="og:image" content="https://wordle.valchy.com/images/words.png" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:alt" content="Infinite Wordle Game - Play unlimited word puzzles" />
				<meta property="og:site_name" content="Infinite Wordle" />
				<meta property="og:locale" content="en_US" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:url" content="https://wordle.valchy.com/" />
				<meta name="twitter:title" content="Infinite Wordle - Play Wordle Unlimited Daily | Free Word Game" />
				<meta
					name="twitter:description"
					content="Play Wordle unlimited! Unlike the original Wordle with one daily puzzle, our infinite Wordle lets you play endless word games 24/7. Free, no limits, new words every game!"
				/>
				<meta name="twitter:image" content="https://wordle.valchy.com/images/words.png" />
				<meta name="twitter:image:alt" content="Infinite Wordle Game - Play unlimited word puzzles" />
				<meta name="twitter:creator" content="@valerisabev" />

				{/* Favicons */}
				<link rel="icon" type="image/png" sizes="32x32" href="/images/words.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/words.png" />
				<link rel="apple-touch-icon" href="/images/words.png" />
				<link rel="shortcut icon" href="/images/words.png" type="image/x-icon" />

				{/* Additional SEO */}
				<meta name="theme-color" content="#000000" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="application-name" content="Infinite Wordle" />
				<meta name="apple-mobile-web-app-title" content="Infinite Wordle" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="mobile-web-app-capable" content="yes" />

				{/* Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Game',
							name: 'Infinite Wordle',
							alternateName: ['Wordle Unlimited', 'Endless Wordle', 'Free Wordle'],
							description:
								'Play Wordle unlimited! Unlike the original Wordle with one daily puzzle, our infinite Wordle lets you play endless word games 24/7. Free, no limits, new words every game!',
							url: 'https://wordle.valchy.com/',
							image: 'https://wordle.valchy.com/images/words.png',
							author: {
								'@type': 'Person',
								name: 'Valeri Sabev'
							},
							gameItem: {
								'@type': 'Thing',
								name: '5-Letter Word Puzzle'
							},
							numberOfPlayers: {
								'@type': 'QuantitativeValue',
								value: 1
							},
							gamePlatform: 'Web Browser',
							operatingSystem: ['Windows', 'macOS', 'Linux', 'iOS', 'Android'],
							applicationCategory: 'GameApplication',
							genre: ['Word Game', 'Puzzle', 'Educational'],
							offers: {
								'@type': 'Offer',
								price: '0',
								priceCurrency: 'USD',
								availability: 'https://schema.org/InStock'
							},
							aggregateRating: {
								'@type': 'AggregateRating',
								ratingValue: '4.8',
								ratingCount: '1250',
								bestRating: '5'
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
			<main className="bg-neutral-900 w-screen flex flex-col items-center">
				<Header />
				<Game />
				<Keyboard />

				{/* SEO Content - Hidden but crawlable */}
				<section className="sr-only">
					<h1>Infinite Wordle - Unlimited Word Puzzle Game</h1>
					<p>
						Welcome to Infinite Wordle, the ultimate unlimited word puzzle experience! Unlike the original Wordle game that only
						allows one puzzle per day, our infinite Wordle lets you play as many word games as you want, whenever you want.
					</p>
					<h2>Why Choose Infinite Wordle Over Regular Wordle?</h2>
					<ul>
						<li>Play unlimited games daily - no waiting for tomorrow!</li>
						<li>New 5-letter word every game</li>
						<li>Same beloved Wordle gameplay mechanics</li>
						<li>Completely free with no ads or registration required</li>
						<li>Perfect for word game enthusiasts who want more than one daily puzzle</li>
						<li>Great for improving vocabulary and word recognition skills</li>
					</ul>
					<h2>How to Play Infinite Wordle</h2>
					<p>
						The rules are identical to the original Wordle: guess the hidden 5-letter word in 6 attempts or fewer. Each guess
						provides clues through color-coded tiles - green for correct letters in the right position, yellow for correct
						letters in the wrong position, and gray for letters not in the word.
					</p>
					<h2>Features</h2>
					<ul>
						<li>Thousands of 5-letter words in our database</li>
						<li>Responsive design works on all devices</li>
						<li>Clean, intuitive interface</li>
						<li>Instant feedback with color-coded tiles</li>
						<li>Track your progress and statistics</li>
					</ul>
				</section>
			</main>
		</>
	);
}
