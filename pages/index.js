import Header from '../components/Header';
import Game from '../components/Game';
import GameStats from '../components/GameStats';
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
				<title>Infinite Wordle Game</title>

				<meta name="description" content="An infinite free wordle game you can play all day long. Try it now!" />
				<meta name="author" content="Valeri Sabev" />
				<meta property="og:title" content="Infinite Wordle Game" />
				<meta name="twitter:title" content="Infinite Wordle Game" />
				<meta property="og:image" content="https://wordle.valchy.com/images/words.png" />
				<meta property="og:image:alt" content="Wordle game" />
				<meta name="twitter:image" content="https://wordle.valchy.com/images/words.png" />
				<meta property="og:description" content="An infinite free wordle game you can play all day long. Try it now!" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:description" content="An infinite free wordle game you can play all day long. Try it now!" />

				<link rel="shortcut icon" href="images/words.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="images/words.png" />
			</Head>
			<main className="bg-neutral-900 w-screen flex flex-col items-center">
				<Header />
				<Game />
				<GameStats />
				<Keyboard />
			</main>
		</>
	);
}
