import { useContext } from 'react';
import { WordleBox } from '../components/WordleComponents';
import { WordleContext } from '../context/WordleContext';

const useInitGame = (toBeGuessedWord) => {
	let wordleRowWrappers = [];

	// Creating 6 wordle row wrappers
	// for the possigle six word guesses
	for (let i = 0; i <= 5; i++) {
		let wordleRow = [];

		// For each row making 5 wordle boxes
		for (let j = 0; j <= 4; j++) {
			wordleRow.push(<WordleBox key={`wordle-box-${i}-${j}`} boxId={`${i}-${j}`}/>);
		}
		
		// Creating the wordle box HTML
		wordleRowWrappers.push(
			<div className="flex flex-row" key={`wordle-row-${i}`}>
				{wordleRow}
			</div>
		);
	}

	return wordleRowWrappers;
}

export default function WordleGame() {
	const {toBeGuessedWord} = useContext(WordleContext);

	// Render the game
	return (
		<div className="bg-neutral-900 h-screen w-screen flex flex-col items-center">
			<h1 className="text-3xl font-bold text-slate-300 pt-4 pb-8 underline">Wordle Game</h1>
			<div className="flex flex-col">
				{useInitGame(toBeGuessedWord)}
			</div>
		</div>
	);
}
