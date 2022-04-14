import { qwerty } from '../data/qwerty';

export default function Keyboard({}) {
	return (
		<div className="mt-10">
			{qwerty.map((keyboardRow, index) => (
				<div key={`keyboard-row-${index}`} className="flex items-center justify-center">
					{keyboardRow.map((letter, index) => (
						<div
							key={`key-${index}`}
							onClick={() =>
								window.dispatchEvent(
									new KeyboardEvent(letter == 'Enter' || letter == 'Backspace' ? 'keydown' : 'keypress', { key: letter })
								)
							}
							className="text-white bg-slate-700 rounded-md uppercase font-bold m-1 py-2 px-4 cursor-pointer select-none"
						>
							{letter == 'Backspace' ? <>&#x232b;</> : letter}
						</div>
					))}
				</div>
			))}
		</div>
	);
}
