import { useState, useEffect, createContext } from 'react';
import { useKey } from 'react-use';

export const WordleContext = createContext();

export const WordleProvider = ({ children }) => {
	const [gameStatus, setGameStatus] = useState('playing');
	const toBeGuessedWord = 'hello';
	const selectedWordleRow = 0;
	const selectedWordleBox = 0;

	// useEffect(() => {
	// 	document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox--}`)?.classList?.remove('selected-wordle-box');
	// 	document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`)?.classList?.add('selected-wordle-box');
	// }, [selectedWordleBox]);

	useKey('Backspace', (e) => {
		e.preventDefault();
		if (selectedWordleBox != 0) selectedWordleBox--;

		const selectedBox = document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`);
		changeWordleBoxBgColor(selectedBox.parentNode, 'default');
		selectedBox.textContent = '';
	});

	useKey('Enter', (e) => {
		e.preventDefault();
		let wordGuess = '';

		for (let i = 0; i <= 4; i++) {
			const wordleBoxElm = document.getElementById(`wordle-box-${selectedWordleRow}-${i}`);
			if (wordleBoxElm.textContent) wordGuess += wordleBoxElm.textContent;
		}

		if (wordGuess.length != 5) alert('Not enough letters!');
		else if (wordGuess === toBeGuessedWord) alert('You Win!');
		else if (selectedWordleRow != 5) {
			selectedWordleBox = 0;
			selectedWordleRow++;
			alert('That is not the word!');
		} else alert('You Lost!');
	});

	useEffect(() => {
		const onGlobalKeyPress = (e) => {
			if (selectedWordleBox == 5) return;
			else {
				const selectedBox = document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`);
				changeWordleBoxBgColor(selectedBox.parentNode, 'wrong');
				selectedBox.textContent = e.key;
			}

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
