import { qwerty } from '../data/qwerty';

export default function Keyboard({}) {
	const clickHandler = (letter) => {
		window.dispatchEvent(new KeyboardEvent(letter == 'Enter' || letter == 'Backspace' ? 'keydown' : 'keypress', { key: letter }));
	};

	return (
		<div className="mt-10">
			{qwerty.map((keyboardRow, index) => (
				<div key={`keyboard-row-${index}`} className="flex items-center justify-center">
					{keyboardRow.map((letter, index) => (
						<div
							key={`key-${index}`}
							id={`keyboard-key-${letter}`}
							onClick={() => clickHandler(letter)}
							className="text-white bg-slate-700 min-w-[40px] text-center rounded-md uppercase font-bold m-1 py-2 px-4 cursor-pointer select-none"
						>
							{letter == 'Backspace' ? <>&#x232b;</> : letter}
						</div>
					))}
				</div>
			))}
		</div>
	);
}
