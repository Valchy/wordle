import { useRef } from 'react';
// import {WordleContext} form '../context/WordleContext';

export const WordleBox = ({boxIndex}) => {
	const wordleRef = useRef(boxIndex);

	return <div className="h-16 w-16 flex items-center justify-center text-3xl p-3 m-1 bg-slate-800">
		<strong id={`wordle-box-${boxIndex}`} ref={wordleRef} className="uppercase text-slate-200"></strong>
	</div>
}