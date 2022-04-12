import { useState } from 'react';
// import {WordleContext} form '../context/WordleContext';

export const WordleInput = ({}) => {
	const [value, setValue] = useState('');

	const handleChange = ({target}) => {
		setValue(target.value);
	}

	return <div>
		<input value={value} onChange={handleChange}/>
	</div>
}