import { useState, useEffect, createContext } from 'react';
import {useKey, useKeyPressEvent} from 'react-use';

export const WordleContext = createContext();

export const WordleProvider = ({children}) => {
	const toBeGuessedWord = 'hello';
	const [wordleBox, setWordleBox] = useState(0);

	useKey('Backspace', () => {
		if (wordleBox != 0) setWordleBox(wordleBox--);
		document.getElementById(`wordle-box-${wordleBox}`).textContent = '';
	});

	useEffect(() => {
		const onGlobalKeyPress = (e) => {
			document.getElementById(`wordle-box-${wordleBox}`).textContent = e.key;

			if (wordleBox != 29) setWordleBox(wordleBox++);
		}

		// Key press global event handler binding
		window.addEventListener('keypress', onGlobalKeyPress);
		return () => window.removeEventListener('keypress', onGlobalKeyPress);
	}, []);

	return <WordleContext.Provider value={{wordleBox, setWordleBox, toBeGuessedWord}}>
		{children}
	</WordleContext.Provider>
}