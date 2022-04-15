import { useRef } from 'react';

export default function WordleBox({ boxId }) {
	const wordleRef = useRef(boxId);

	return (
		<div className="relative z-[1] h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center p-3 m-1 bg-slate-800">
			<strong
				id={`wordle-box-${boxId}`}
				ref={wordleRef}
				className="relative z-[1] uppercase text-slate-200 text-[15px] sm:text-3xl"
			></strong>
		</div>
	);
}
