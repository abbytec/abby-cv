/* eslint-disable react/react-in-jsx-scope */
import "external-svg-loader";



// eslint-disable-next-line no-unused-vars
import Home from './home/Home';
import Education from './education/Education';
import Skills2 from './skills/Skills';
import Experiences from './experiences/Experiences';
import Contact from "./contact/Contact";
import { Routes, Route } from 'react-router-dom';

export function Content() {



	return (
		<>
			<div className="container-fluid">
				<div className="progress">
					<div id="progressbar" style={{ width: "0%" }} className="progress-bar progress-bar-striped progress-bar-animated"></div>
				</div>
				<div id="contentDiv">
					<Routes>
						<Route exact path='/' element={<Home />}></Route>
						<Route exact path='/education' element={<Education />}></Route>
						<Route exact path='/skills' element={<Skills2 />}></Route>
						<Route exact path='/experiences' element={<Experiences />}></Route>
						<Route exact path='/contact' element={<Contact />}></Route>
					</Routes>
				</div>
			</div >
		</>);
}
