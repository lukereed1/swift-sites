import Costs from "./Costs";
import Features from "./Features";
import Hero from "./Hero";
import ProcessOverview from "./ProcessOverview";

interface Props {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

export default function HomePage({ isDarkMode, toggleDarkMode }: Props) {
	return (
		<div className={`${isDarkMode ? "bg-black" : "bg-transparent"} z-10`}>
			<Hero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
			<Features isDarkMode={isDarkMode} />
			<ProcessOverview isDarkMode={isDarkMode} />
			<Costs isDarkMode={isDarkMode} />
		</div>
	);
}
