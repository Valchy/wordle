import { useContext } from 'react';
import { WordleContext } from '../context/WordleContext';

export default function GameStats() {
	const {
		gameStats: { played, wins, losses, guesses },
	} = useContext(WordleContext);

	const uiDataGameStats = [
		{
			label: 'Played',
			value: played,
		},
		{
			label: 'Wins',
			value: wins,
		},
		{
			label: 'Losses',
			value: losses,
		},
		{
			label: 'Avg. guesses',
			value: (guesses / (played || 1)).toFixed(1),
		},
	];

	return (
		<section className="mt-5 flex">
			{uiDataGameStats.map(({ label, value }, index) => (
				<div key={`game-stats-${index}`} className="mx-3 text-white flex flex-col items-center">
					<strong>{label}</strong>
					<span>{value}</span>
				</div>
			))}
		</section>
	);
}
