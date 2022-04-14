import Header from '../components/Header';
import Game from '../components/Game';
import Keyboard from '../components/Keyboard';

export default function WordleGame() {
	return (
		<div className="bg-neutral-900 h-screen w-screen flex flex-col items-center">
			<Header />
			<Game />
			<Keyboard />
		</div>
	);
}
