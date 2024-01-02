import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import ContactPage from "./pages/Contact";
import PortfolioPage from "./pages/Portfolio";
import ResumePage from "./pages/Resume";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AboutPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
				<Route path="/resume" element={<ResumePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
