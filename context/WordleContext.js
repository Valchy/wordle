import { useState, useEffect, createContext } from 'react';
import {useKey, useKeyPressEvent} from 'react-use';

export const WordleContext = createContext();

export const WordleProvider = ({children}) => {
	const toBeGuessedWord = 'hello';
	const [selectedWordleRow, setSelectedWordleRow] = useState(0);
	const [selectedWordleBox, setSelectedWordleBox] = useState(0);

	useKey('Backspace', (e) => {
		e.preventDefault();
		if (selectedWordleBox != 0) setSelectedWordleBox(selectedWordleBox--);
		document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`).textContent = '';
	});

	useKey('Enter', (e) => {
		e.preventDefault();
		let wordGuess = '';

		for (let i = 0; i <= 4; i++) {
			wordGuess += document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`).textContent;
		}

		if (wordGuess.length == 5) {
			alert(`You guessed: ${wordGuess}`);
		} else alert('Nope');
	});

	useEffect(() => {
		const onGlobalKeyPress = (e) => {
			if (selectedWordleBox == 5) return;
			else document.getElementById(`wordle-box-${selectedWordleRow}-${selectedWordleBox}`).textContent = e.key;

			if (selectedWordleBox <= 4) setSelectedWordleBox(selectedWordleBox++);
		}

		// Key press global event handler binding
		window.addEventListener('keypress', onGlobalKeyPress);
		return () => window.removeEventListener('keypress', onGlobalKeyPress);
	}, []);

	return <WordleContext.Provider value={{selectedWordleBox, setSelectedWordleBox, selectedWordleRow, setSelectedWordleRow, toBeGuessedWord}}>
		{children}
	</WordleContext.Provider>
}