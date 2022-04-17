import { useState, useEffect, createContext } from 'react';
import { alphabet } from '../data/alphabet';
import { words } from '../data/words';

export const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
	const [gameStats, setGameStats] = useState({
		played: 0,
		wins: 0,
		losses: 0,
		guesses: 0
	});
	const [gameStatus, setGameStatus] = useState('playing');
	const [wordleAlert, setWordleAlert] = useState({ label: '', color: '', time: 0 });
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
				if (selectedWordleBox != 5) return setWordleAlert({ label: 'Not enough letters ^_^', color: '#003C6C', time: 2000 });

				let wordGuess = ''; // Will include guessed word based on the five wordle boxes on the selected row

				// Looping through wordle row to get guess word
				for (let i = 0; i <= 4; i++) {
					// Add wordle box letter to guess word state
					const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${i}`);
					if (wordleBoxElm.textContent) wordGuess += wordleBoxElm.textContent;
				}

				// Error handling if word is not in the word list
				if (!words.includes(wordGuess.toLowerCase()))
					return setWordleAlert({ label: 'Word is not in word list :(', color: '#003C6C', time: 2000 });

				// Do color highlighting of wordle box and keyboard
				for (let i = 0; i <= 4; i++) {
					let timeoutTime = 350;
					const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${i}`);
					const wordleBoxLetter = wordleBoxElm.textContent.toLowerCase();

					// Color by position and if exists in word
					if (wordleBoxLetter == toBeGuessedWord[i]) {
						// Color if correct keyboard and wordle box
						setTimeout(() => changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-correct', true), timeoutTime * i);
						setTimeout(
							() => document.getElementById(`keyboard-key-${wordleBoxLetter}`).classList.add('bg-correct'),
							timeoutTime * 5
						);
					} else if (wordleBoxLetter && toBeGuessedWord.includes(wordleBoxLetter)) {
						// Color if correct but wrong place keyboard and wordle box
						setTimeout(() => changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-miss', true), timeoutTime * i);
						setTimeout(
							() => document.getElementById(`keyboard-key-${wordleBoxLetter}`).classList.add('bg-miss'),
							timeoutTime * 5
						);
					} else {
						// Color keyboard for guessed but wrong letter
						setTimeout(() => changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-wrong', true), timeoutTime * i);
						setTimeout(
							() => document.getElementById(`keyboard-key-${wordleBoxLetter}`).classList.add('bg-wrong'),
							timeoutTime * 5
						);
					}
				}

				// End game handler
				const handleEndGameAndSaveGameStats = (endOfGame) => {
					setGameStatus(endOfGame);
					setWordleAlert({
						label:
							endOfGame == 'wins'
								? `Congrats, you won! Reload to play again :)`
								: `Damn, you ${
										gameStats.losses > 0 ? 'lost again' : 'lost'
								  }, word was "${toBeGuessedWord}". Reload and try again :)`,
						color: endOfGame == 'wins' ? '#38B2AB' : '#F56565',
						time: 1
					});

					gameStats[endOfGame] += 1;
					gameStats.played += 1;
					gameStats.guesses += selectedWordleRow + 1;

					setGameStats({ ...gameStats });
					window.localStorage.gameStats = JSON.stringify(gameStats);
				};

				// Alerting user based on their word guess
				if (wordGuess === toBeGuessedWord) handleEndGameAndSaveGameStats('wins');
				else if (selectedWordleRow != 5) {
					selectedWordleBox = 0;
					selectedWordleRow++;
					setWordleAlert({ label: 'This is not the word!', color: '#4299E1', time: 2000 });
				} else handleEndGameAndSaveGameStats('losses');
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
				wordleAlert,
				setWordleAlert,
				selectedWordleBox,
				selectedWordleRow,
				toBeGuessedWord
			}}
		>
			{children}
		</WordleContext.Provider>
	);
};

const changeWordleBoxBgColor = (elm, color, flip = false) => {
	elm.classList.remove(elm.className.split(' ').find((elmClass) => elmClass.slice(0, 2) == 'bg'));
	if (flip) elm.classList.add('flip-wordle-word');
	elm.classList.add(color == 'default' ? 'bg-slate-800' : color);
};
