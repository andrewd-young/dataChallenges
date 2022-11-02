import "./App.css";
import {useState} from "react";
// import ReactDOMServer from "react-dom/server";

function App() {
	const challenges = [
		// ["NBA Points", "Mr. Schlenker", "NBA Points Challenge - CSML 1022.pdf"],
		["Polling", "Andrew Young", "Polling Data Challenge - CSML 1022.pdf", 33],
		["Boston Bruins NHL data ", "Cailyn Murphy"],
		["Bears Vs Packers Rivalry", "Brendan Poirier"],
		["top Billboard charts singles", "Nick Ruddy"],
		["most frequently used words in the dictionary", "Nicholas Santaniello"],
		["Mlb prediction accuracy", "Drew Behrens"],
		["Trends in Wordle Answers", "Eli Helzberg"],
		["Most Common Passwords", "Stephen"],
	];
	const [currentChallenge, setChallenge] = useState(challenges[0]);
	const [overlayOn, setOverlay] = useState(false);
	const [codeResponse, setCodeResponse] = useState("");

	const handleClick = (index) => {
		setChallenge(challenges[index]);
		setOverlay(true);
	};

	const compareCode = () => {
		let code = document.getElementById("codeInput").value;
		//count lines of code
		let lines = code.split(`
`).length;
		if (lines > currentChallenge[3]) {
			setCodeResponse("Your code has more lines than needed. Keep trying!");
		} else if (lines < currentChallenge[3]) {
			setCodeResponse("Your code is even better the solution! Great job! Go show it to Mr. Schlenker!");
		} else {
			setCodeResponse("You found the optimal solution! Great job!");
		}
	};

	return (
		<div>
			<div className="w-5/6 my-12 mx-auto space-y-10">
				<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Choose a challenge:</h1>
				<div>
					<div className="grid grid-cols-4 gap-10">
						{challenges.map((challenge, index) => (
							<div onClick={() => handleClick(index)} class="cursor-pointer block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{challenge[0]}</h5>
								<p class="font-normal text-gray-700 dark:text-gray-400">{challenge[1]}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={overlayOn ? "absolute w-5/6 my-12 mx-auto top-0 right-0 bottom-0 left-0 cursor-pointer" : "fixed hidden w-5/6 my-12 mx-auto top-0 right-0 bottom-0 left-0 cursor-pointer pointer-events-none"}>
				<div className="overflow-scroll col-span-2 relative mx-auto flex flex-col">
					<div href="#" class="mb-12 overflow-scroll float-right block p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 space-y-5">
						<button onClick={() => setOverlay(false)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mr-2">
								<path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clip-rule="evenodd" />
							</svg>
							Go back
						</button>
						<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{currentChallenge[0]}</h1>
						<h2 class="text-4xl font-extrabold dark:text-white"></h2>
						<p class="font-normal text-gray-700 dark:text-gray-400">{currentChallenge[1]}</p>
						<iframe src={process.env.PUBLIC_URL + currentChallenge[2]} width="100%" height="500px"></iframe>

						<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
							Compare your code to the optimal solution
						</label>
						<textarea id="codeInput" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste your code..."></textarea>
						<button onClick={compareCode} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
							Compare
						</button>
						<p className="float-right font-normal text-gray-700 dark:text-gray-400"></p>
						<div class="float-right p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
							{codeResponse}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
