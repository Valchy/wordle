import { useState, useEffect, createContext } from 'react';
import { useKey } from 'react-use';

export const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
	const [gameStatus, setGameStatus] = useState('playing');
	const [alertMsg, setAlertMsg] = useState('New game, start guessing...');
	const toBeGuessedWord = 'hello';
	const selectedWordleRow = 0,
		selectedWordleBox = 0;

	// useEffect(() => {
	// 	document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox--}`)?.classList?.remove('selected-wordle-box');
	// 	document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`)?.classList?.add('selected-wordle-box');
	// }, [selectedWordleBox]);

	useKey('Backspace', (e) => {
		if (gameStatus != 'playing') return;

		e.preventDefault();
		if (selectedWordleBox != 0) selectedWordleBox--;

		const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`);
		changeWordleBoxBgColor(wordleBoxElm.parentNode, 'default');
		wordleBoxElm.textContent = '';
	});

	useKey('Enter', (e) => {
		if (gameStatus != 'playing') return;

		e.preventDefault();
		let wordGuess = '';

		for (let i = 0; i <= 4; i++) {
			const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${i}`);
			const wordleBoxLetter = wordleBoxElm.textContent.toLowerCase();

			if (wordleBoxLetter == toBeGuessedWord[i]) {
				changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-correct');
				document.getElementById(`keyboard-key-${wordleBoxLetter}`).classList.add('bg-correct');
			} else if (wordleBoxLetter && toBeGuessedWord.includes(wordleBoxLetter)) {
				changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-miss');
				document.getElementById(`keyboard-key-${wordleBoxLetter}`).classList.add('bg-miss');
			}

			if (wordleBoxElm.textContent) wordGuess += wordleBoxElm.textContent;
		}

		if (wordGuess.length != 5) setAlertMsg('Not enough letters ^_^');
		else if (wordGuess === toBeGuessedWord) {
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
	});

	useEffect(() => {
		const onGlobalKeyPress = (e) => {
			// Error handling
			if (gameStatus != 'playing') return;
			if (selectedWordleBox == 5) return;

			const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`);
			changeWordleBoxBgColor(wordleBoxElm.parentNode, 'bg-wrong');
			wordleBoxElm.textContent = e.key;

			if (selectedWordleBox <= 4) selectedWordleBox++;
		};

		// Key press global event handler binding
		window.addEventListener('keypress', onGlobalKeyPress);
		return () => window.removeEventListener('keypress', onGlobalKeyPress);
	}, []);

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
