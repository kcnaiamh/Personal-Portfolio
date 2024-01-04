import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import ResumePage from "./pages/Resume";
import JourneyPage from "./pages/Journey";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AboutPage />} />
				<Route path="/journey" element={<JourneyPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
				<Route path="/resume" element={<ResumePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
