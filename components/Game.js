import { useContext } from 'react';
import { WordleContext } from '../context/WordleContext';
import WordleBox from './WordleBox';

export default function Game() {
	const { toBeGuessedWord } = useContext(WordleContext);
	const useInitGameHTML = () => {
		let wordleRowWrappers = [];

		// Creating 6 wordle row wrappers
		// for the possigle six word guesses
		for (let i = 0; i <= 5; i++) {
			let wordleRow = [];

			// For each row making 5 wordle boxes
			for (let j = 0; j <= 4; j++) {
				wordleRow.push(<WordleBox key={`wordle-box-${i}-${j}`} boxId={`${i}-${j}`} />);
			}

			// Creating the wordle box HTML
			wordleRowWrappers.push(
				<div className="flex flex-row" key={`wordle-row-${i}`}>
					{wordleRow}
				</div>
			);
		}

		return wordleRowWrappers;
	};

	return <div className="flex flex-col">{useInitGameHTML()}</div>;
}
