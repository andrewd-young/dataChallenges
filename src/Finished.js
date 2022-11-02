export default function Finished(props) {
	const termsArray = props.terms;

	//sleep for 1 second to allow time for the user to see the result
	setTimeout(() => {
		document.addEventListener("keypress", eventAcceptor, false);
	}, 1000);

	function eventAcceptor(e) {
		var code = e.code;
		if (code === "Enter") {
			props.setLearnCounter();
			document.removeEventListener("keypress", eventAcceptor, false);
		}
	}

	const congratsMessages = ["Yay", "You did it", "Awsome", "Congrats"];
	const congratsEmojis = ["🏆", "💯", "🎉", "👏", "👏", "👌"];

	return (
		<a className="block bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 space-y-5">
			<div className="py-10 flex bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<h1 className="space-y-5 text-center m-auto text-5xl dark:text-white">
					<b>{congratsMessages[Math.floor(Math.random() * congratsMessages.length)] + " " + congratsEmojis[Math.floor(Math.random() * congratsEmojis.length)]}</b>
					<p className="text-base dark:text-slate-400">You successfully studied {termsArray.length} terms!</p>
					<button
						onClick={() => {
							props.setAppInput({learnMode: false, submittedSet: false, terms: ""});
						}}
						href="#"
						className="py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Study a New Set
					</button>
					<button
						onClick={() => {
							props.setAppInput({learnMode: false, submittedSet: true, terms: termsArray});
						}}
						href="#"
						className="py-3 px-5 ml-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						Restart This Set 🔄
					</button>
				</h1>
			</div>
		</a>
	);
}
