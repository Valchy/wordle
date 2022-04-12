import { useState, createContext } from 'react';

export const WordleContext = createContext();

export const WordleProvider = () => {
	const [wordleInputValue, setWordleInputValue] = useState('');

	const onWordleInputChange = ({target}) => {
		setWordleInputValue(target.value);
	}

	return <WordleContext.Provider value={{onWordleInputChange}}>
		{children}
	</WordleContext.Provider>
}