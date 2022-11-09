import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Publication from '../pages/Publication';
import Header from '../Components/Header';

const RouterDOM = () => {
	return (
		<Router>
            <Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/publication" element={<Publication />} />
			</Routes>
		</Router>
	);
}
export default RouterDOM;