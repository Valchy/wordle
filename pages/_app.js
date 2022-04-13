import "../styles/globals.css";
import "../styles/wordle.css";

import {WordleProvider} from '../context/WordleContext';

function MyApp({ Component, pageProps }) {
	return <WordleProvider>
		<Component {...pageProps} />;
	</WordleProvider>
}

export default MyApp;
