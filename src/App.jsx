import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import ResumePage from "./pages/Resume";
import NotFound from "./pages/404";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
				<Route path="/resume" element={<ResumePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
