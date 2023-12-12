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
		<>
			<Hero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
			<Features />
			<ProcessOverview />
			<Costs />
		</>
	);
}
