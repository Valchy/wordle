import { useState } from 'react';
import GameStats from '../components/GameStats';
import AlertMsg from '../components/AlertMsg';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="z-50 py-3 w-screen text-center flex flex-col items-center relative">
			{/* Hamburger Menu Button */}
			<button
				onClick={toggleMenu}
				className="absolute top-3 right-4 z-60 p-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
				aria-label="Menu"
			>
				<div className="w-6 h-6 flex flex-col justify-center items-center">
					<span
						className={`block w-full h-0.5 bg-current transform transition-all duration-300 ${
							isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
						}`}
					></span>
					<span
						className={`block w-full h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
					></span>
					<span
						className={`block w-full h-0.5 bg-current mt-1 transform transition-all duration-300 ${
							isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
						}`}
					></span>
				</div>
			</button>

			{/* Overlay */}
			{isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>}

			{/* Menu Panel */}
			<div
				className={`fixed top-0 right-0 h-full w-80 bg-neutral-800 shadow-lg transform transition-transform duration-300 z-50 ${
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<div className="p-6 pt-16">
					{/* Close button */}
					<button
						onClick={closeMenu}
						className="absolute top-4 right-4 text-slate-300 hover:text-white text-2xl cursor-pointer"
						aria-label="Close menu"
					>
						×
					</button>

					{/* Menu Content */}
					<div className="text-left">
						<h3 className="text-xl font-bold text-white mb-4">About the Developer</h3>

						<div className="mb-6">
							<p className="text-slate-300 mb-3">Hi! I&apos;m Valeri Sabev, the creator of Infinite Wordle.</p>
							<p className="text-slate-300 mb-4">
								I&apos;m passionate about creating engaging web experiences and helping businesses leverage AI technology.
							</p>
						</div>

						<div className="space-y-4">
							<a
								href="https://valerisabev.com"
								target="_blank"
								rel="noopener noreferrer"
								className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors cursor-pointer text-center font-medium"
								onClick={closeMenu}
							>
								Visit My Portfolio
							</a>

							<div className="bg-neutral-700 p-4 rounded-lg">
								<h4 className="text-white font-semibold mb-2">Business Owner?</h4>
								<p className="text-slate-300 text-sm mb-3">
									Does your business need an AI audit? Discover how AI can transform your operations and boost efficiency.
								</p>
								<a
									href="https://vouchee.ai"
									target="_blank"
									rel="noopener noreferrer"
									className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-center font-medium transition-colors cursor-pointer"
									onClick={closeMenu}
								>
									Get Your AI Audit
								</a>
							</div>

							<div className="text-center pt-4 border-t border-neutral-600">
								<p className="text-slate-400 text-sm">Enjoying Infinite Wordle? Share it with friends!</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<h1 className="text-3xl font-bold text-slate-300">Infinite Wordle</h1>
			<GameStats />
			<AlertMsg />
		</header>
	);
}
