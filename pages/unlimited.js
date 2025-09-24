import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

export default function WordleUnlimited() {
	const router = useRouter();

	useEffect(() => {
		// Redirect to main page after showing SEO content
		const timer = setTimeout(() => {
			router.push('/');
		}, 3000);

		return () => clearTimeout(timer);
	}, [router]);

	return (
		<>
			<Head>
				<title>Wordle Unlimited - Play Infinite Wordle Games Free | No Daily Limit</title>
				<meta
					name="description"
					content="Wordle Unlimited lets you play infinite word puzzles! No more waiting for daily Wordle - play as many games as you want, anytime. Free unlimited Wordle games!"
				/>
				<meta
					name="keywords"
					content="wordle unlimited, unlimited wordle, infinite wordle, wordle no limit, free wordle games, wordle multiple games, endless wordle"
				/>
				<link rel="canonical" href="https://wordle.valchy.com/unlimited" />

				{/* Open Graph */}
				<meta property="og:title" content="Wordle Unlimited - Play Infinite Wordle Games Free | No Daily Limit" />
				<meta
					property="og:description"
					content="Wordle Unlimited lets you play infinite word puzzles! No more waiting for daily Wordle - play as many games as you want, anytime."
				/>
				<meta property="og:url" content="https://wordle.valchy.com/unlimited" />

				{/* Auto-redirect meta tag */}
				<meta httpEquiv="refresh" content="3;url=/" />
			</Head>

			<div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-8">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-400">Wordle Unlimited</h1>
					<h2 className="text-2xl md:text-3xl font-semibold mb-8">Play Infinite Wordle Games - No Daily Limit!</h2>

					<div className="text-lg md:text-xl space-y-4 mb-8">
						<p>
							🎮 <strong>Unlimited Games:</strong> Play as many Wordle puzzles as you want, anytime!
						</p>
						<p>
							🆓 <strong>Completely Free:</strong> No registration, no ads, no limitations.
						</p>
						<p>
							🔄 <strong>New Words Every Game:</strong> Fresh 5-letter word puzzles every time.
						</p>
						<p>
							⚡ <strong>Instant Play:</strong> No waiting for tomorrow&apos;s puzzle!
						</p>
					</div>

					<div className="bg-neutral-800 rounded-lg p-6 mb-8">
						<h3 className="text-xl font-bold mb-4">Why Choose Wordle Unlimited?</h3>
						<ul className="text-left space-y-2">
							<li>✅ Play multiple games per day (unlike original Wordle)</li>
							<li>✅ Same beloved gameplay mechanics</li>
							<li>✅ Perfect for word game enthusiasts</li>
							<li>✅ Great for improving vocabulary</li>
							<li>✅ Works on all devices</li>
						</ul>
					</div>

					<p className="text-lg text-green-400 font-semibold">Redirecting to your unlimited Wordle experience in 3 seconds...</p>

					<div className="mt-4">
						<Link
							href="/"
							className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
						>
							Play Now - Start Unlimited Wordle!
						</Link>
					</div>
				</div>

				{/* SEO Content */}
				<section className="sr-only">
					<h2>About Wordle Unlimited</h2>
					<p>
						Wordle Unlimited is the perfect solution for word puzzle enthusiasts who want more than the single daily puzzle
						offered by the original Wordle game. Our unlimited version allows you to play as many 5-letter word puzzles as you
						desire, completely free of charge.
					</p>

					<h3>Game Features</h3>
					<ul>
						<li>Unlimited daily games - no 24-hour waiting period</li>
						<li>Thousands of 5-letter words in our database</li>
						<li>Color-coded feedback system (green, yellow, gray tiles)</li>
						<li>6 attempts per word puzzle</li>
						<li>Mobile-responsive design</li>
						<li>No registration or download required</li>
					</ul>

					<h3>How to Play Unlimited Wordle</h3>
					<p>
						The gameplay is identical to the original Wordle: guess a 5-letter word in 6 attempts. Each guess provides colored
						tile feedback to help you solve the puzzle. Green tiles indicate correct letters in the right position, yellow tiles
						show correct letters in wrong positions, and gray tiles represent letters not in the target word.
					</p>
				</section>
			</div>
		</>
	);
}
