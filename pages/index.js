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
				<meta name="description" content="An infinite free wordle game you can play all day long" />
				<meta name="author" content="Valeri Sabev" />
				<meta property="og:title" content="An infinite free wordle game" />
				<meta name="twitter:title" content="An infinite free wordle game" />
				<meta property="og:image" content="images/words.png" />
				<meta name="twitter:image" content="images/words.png" />
				<meta property="og:description" content="An infinite free wordle game you can play all day long" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:description" content="summary" />
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
