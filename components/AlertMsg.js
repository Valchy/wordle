import { useContext, useState, useEffect } from 'react';
import { WordleContext } from '../context/WordleContext';

export default function AlertMsg() {
	const [showAlert, setShowAlert] = useState(false);
	const { wordleAlert } = useContext(WordleContext);

	useEffect(() => {
		setShowAlert(true);

		if (wordleAlert.time != 1) setTimeout(() => setShowAlert(false), wordleAlert.time);
	}, [wordleAlert]);

	return (
		showAlert &&
		wordleAlert.time != 0 && (
			<div
				style={{ backgroundColor: `${wordleAlert.color}`, boxShadow: '1px 12px 52px 0px rgba(0,0,0,0.7)' }}
				className="transition-all duration-500 absolute z-50 rounded-md -bottom-4 flex items-center justify-center text-white text-sm font-bold px-4 py-3"
				role="alert"
			>
				<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
				</svg>
				<p>{wordleAlert.label}</p>
			</div>
		)
	);
}
