import GameStats from '../components/GameStats';
import AlertMsg from '../components/AlertMsg';

export default function Header() {
	return (
		<header className="py-6 w-screen text-center flex flex-col items-center relative">
			<h1 className="text-3xl font-bold text-slate-300">Infinite Wordle</h1>
			<GameStats />
			<AlertMsg />
		</header>
	);
}
