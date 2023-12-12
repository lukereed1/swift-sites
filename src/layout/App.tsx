import { useState } from "react";
import HomePage from "../pages/home/HomePage";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
	const [darkMode, setDarkMode] = useState(false);

	function toggleDarkMode() {
		setDarkMode(!darkMode);
	}

	return (
		<>
			<Header />
			<HomePage isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
			<Footer />
		</>
	);
}

export default App;
