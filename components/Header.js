import { useContext } from 'react';
import { WordleContext } from '../context/WordleContext';

export default function Header() {
	const { alertMsg } = useContext(WordleContext);

	return (
		<header className="pt-12 pb-6 text-center">
			<h1 className="text-3xl font-bold text-slate-300 pb-8">Infinite Wordle</h1>
			<span className="text-white">{alertMsg}</span>
		</header>
	);
}
