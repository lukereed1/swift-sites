import Background from "/footer-background.svg";
import DarkBackground from "/dark-footer-background.svg";
import Logo from "../assets/logo.svg";
import MenuButton from "../components/MenuButton";
import Navigation from "./Navigation";

interface Props {
	isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: Props) {
	const background = isDarkMode ? DarkBackground : Background;

	return (
		// Curved gradient background
		<footer
			className="w-full h-[300px] pt-4 bg-no-repeat bg-center z-40 mt-[-220px]
			lg:mt-[-220px]		
			xl:bg-cover
			2xl:h-[300px]"
			style={{
				backgroundImage: `url(${background})`,
			}}>
			<div
				className="flex justify-between items-center px-[40px] mx-auto z-50
				lg:px-[80px] lg:w-[1024px]
				xl:px-[120px] xl:w-[1440px]
				2xl:w-[1920px] 2xl:px-[180px]">
				{/* Logo */}
				<button className="mt-[190px]">
					<img className="w-[200px]" src={Logo} alt="swift sites logo" />
				</button>
				<div className="mt-[195px] xl:hidden">
					<MenuButton isDarkMode={isDarkMode} />
				</div>
				<div className="hidden xl:flex mt-[195px]">
					<Navigation />
				</div>
			</div>
		</footer>
	);
}
