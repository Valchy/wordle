import { useState, useEffect, createContext } from 'react';
import { alphabet } from '../data/alphabet';
import { words } from '../data/words';

export const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
	const [gameStats, setGameStats] = useState({
		played: 0,
		wins: 0,
		losses: 0,
		guesses: 0,
	});
	const [gameStatus, setGameStatus] = useState('playing');
	const [alertMsg, setAlertMsg] = useState('New game, start guessing...');
	const toBeGuessedWord = words[Math.floor(Math.random() * words.length)];
	const selectedWordleRow = 0,
		selectedWordleBox = 0;

	useEffect(() => {
		if (window.localStorage.gameStats) setGameStats(JSON.parse(window.localStorage.gameStats));
	}, []);

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

				// Looping through wordle row to get guess word
				for (let i = 0; i <= 4; i++) {
					// Add wordle box letter to guess word state
					const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${i}`);
					if (wordleBoxElm.textContent) wordGuess += wordleBoxElm.textContent;
				}

				// Error handling if word is not in the word list
				if (!words.includes(wordGuess)) return setAlertMsg('Word is not in word list :(');

				// Do color highlighting of wordle box and keyboard
				for (let i = 0; i <= 4; i++) {
					const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${i}`);
					const wordleBoxLetter = wordleBoxElm.textContent.toLowerCase();

					// Color by position and if exists in word
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

				const endGameAndSaveGameStats = (endOfGame) => {
					setGameStatus(endOfGame);
					setAlertMsg(
						endOfGame == 'wins'
							? `Congrats, you ${gameStats.wins > 0 ? 'won again' : 'won'}! Reload to play again :)`
							: `Damn, you ${gameStats.losses > 0 ? 'lost again' : 'lost'}! Reload and try again :)`
					);

					gameStats[endOfGame] += 1;
					gameStats.played += 1;
					gameStats.guesses += selectedWordleRow + 1;

					setGameStats({ ...gameStats });
					window.localStorage.gameStats = JSON.stringify(gameStats);
				};

				// Alerting user based on their word guess
				if (wordGuess === toBeGuessedWord) endGameAndSaveGameStats('wins');
				else if (selectedWordleRow != 5) {
					selectedWordleBox = 0;
					selectedWordleRow++;
					setAlertMsg('This is not the word!');
				} else endGameAndSaveGameStats('losses');
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
	}, [gameStatus, gameStats]);

	return (
		<WordleContext.Provider
			value={{
				gameStats,
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
