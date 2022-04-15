import { qwerty } from '../data/qwerty';

export default function Keyboard({}) {
	const clickHandler = (letter) => {
		window.dispatchEvent(new KeyboardEvent('keydown', { key: letter }));
	};

	return (
		<section className="mt-10">
			{qwerty.map((keyboardRow, index) => (
				<div key={`keyboard-row-${index}`} className="flex items-center justify-center">
					{keyboardRow.map((letter, index) => (
						<div
							key={`key-${index}`}
							id={`keyboard-key-${letter}`}
							onClick={() => clickHandler(letter)}
							className="text-white bg-slate-700 text-[12px] sm:text-base sm:min-w-[40px] text-center rounded-md uppercase font-bold m-[2px] sm:m-1 py-2 px-2 sm:px-4 cursor-pointer select-none"
						>
							{letter == 'Backspace' ? <>&#x232b;</> : letter}
						</div>
					))}
				</div>
			))}
		</section>
	);
}
