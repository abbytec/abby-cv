/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Nav } from './components/nav/menu';
import './components/style.sass';
import { Content } from './content/content.jsx'
import { BrowserRouter as Router } from 'react-router-dom';

export function loadedImgs() {
	const progressbar = document.getElementById("progressbar");
	progressbar.style.width = "calc(" + progressbar.style.width + " + 30%)";
}

function App() {


	document.addEventListener('readystatechange', () => {
		if (document.readyState === "complete")
			document.getElementsByClassName("progress")[0].style.display = "none";
	});
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	return (
		<div id="App" className="App">
			<div id="interfaz" style={{ display: "flex", position: "absolute", width: "100%", boxSizing: "border-box" }}>
				<Router>
					<Nav></Nav>
					<div id="content">
						<Content style={{ display: "block", maxWidth: "100%" }}></Content>
					</div>
				</Router>
			</div>
		</div>
	)
}

export default App
