import { useState, useEffect, createContext } from 'react';
import { alphabet } from '../data/alphabet';
import { words } from '../data/words';

export const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
	const [gameStatus, setGameStatus] = useState('playing');
	const [alertMsg, setAlertMsg] = useState('New game, start guessing...');
	const toBeGuessedWord = words[Math.floor(Math.random() * words.length)];
	const selectedWordleRow = 0,
		selectedWordleBox = 0;

	useEffect(() => {
		const onGlobalKeyPress = ({ key }) => {
			// Error handling
			if (gameStatus != 'playing') return;

			// On backspace key press
			if (key == 'Backspace') {
				// Decrement selected wordle box by one if not first box
				if (selectedWordleBox != 0) selectedWordleBox--;

				// Change box color and its letter content to empty
				const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`);
				changeWordleBoxBgColor(wordleBoxElm.parentNode, 'default');
				wordleBoxElm.textContent = '';
			}

			// On enter key press
			if (key == 'Enter') {
				// Error handling if not enough letters have been provided
				if (selectedWordleBox != 5) return setAlertMsg('Not enough letters ^_^');

				let wordGuess = ''; // Will include guessed word based on the five wordle boxes on the selected row

				// Looping through wordle row to get guess word and do color highlighting
				for (let i = 0; i <= 4; i++) {
					const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${i}`);
					const wordleBoxLetter = wordleBoxElm.textContent.toLowerCase();

					// Add wordle box letter to guess word state
					if (wordleBoxElm.textContent) wordGuess += wordleBoxElm.textContent;

					if (wordleBoxLetter == toBeGuessedWord[i]) {
						// Color if correct keyboard and wordle box
						changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-correct');
						document.getElementById(`keyboard-key-${wordleBoxLetter}`).classList.add('bg-correct');
					} else if (wordleBoxLetter && toBeGuessedWord.includes(wordleBoxLetter)) {
						// Color if correct but wrong place keyboard and wordle box
						changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-miss');
						document.getElementById(`keyboard-key-${wordleBoxLetter}`).classList.add('bg-miss');
					} else {
						// Color keyboard for guessed but wrong letter
						document.getElementById(`keyboard-key-${wordleBoxLetter}`).classList.add('bg-wrong');
					}
				}

				// Alerting user based on their word guess
				if (wordGuess === toBeGuessedWord) {
					setGameStatus('stopped');
					setAlertMsg('You guessed the word :P');
				} else if (selectedWordleRow != 5) {
					selectedWordleBox = 0;
					selectedWordleRow++;
					setAlertMsg('That is not the word!');
				} else {
					setGameStatus('stopped');
					setAlertMsg('Yup, you just lost :/');
				}
			}

			// On alphabet letter key press
			if (alphabet.includes(key.toLowerCase())) {
				// Error handling if on last box and a letter is provided
				if (selectedWordleBox == 5) return;

				const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`);
				changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-wrong');
				wordleBoxElm.textContent = key;

				if (selectedWordleBox <= 4) selectedWordleBox++;
			}
		};

		// Key press global event handler binding
		window.addEventListener('keydown', onGlobalKeyPress);
		return () => window.removeEventListener('keydown', onGlobalKeyPress);
	}, [gameStatus]);

	return (
		<WordleContext.Provider
			value={{
				gameStatus,
				setGameStatus,
				alertMsg,
				setAlertMsg,
				selectedWordleBox,
				selectedWordleRow,
				toBeGuessedWord,
			}}
		>
			{children}
		</WordleContext.Provider>
	);
};

const changeWordleBoxBgColor = (elm, color) => {
	const elmClassList = elm.classList;
	elmClassList.remove(elm.className.split(' ').find((elmClass) => elmClass.slice(0, 2) == 'bg'));
	elmClassList.add(color == 'default' ? 'bg-slate-800' : color);
};
