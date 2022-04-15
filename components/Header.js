import { useContext } from 'react';
import { WordleContext } from '../context/WordleContext';

export default function Header() {
	const { alertMsg } = useContext(WordleContext);

	return (
		<header className="pt-4 pb-3 text-center">
			<h1 className="text-3xl font-bold text-slate-300 pb-5">Wordle</h1>
			<span className="text-white">{alertMsg}</span>
		</header>
	);
}
