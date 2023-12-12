import Background from "../assets/footer-background.svg";
import Logo from "../assets/logo.svg";
import MenuButton from "../components/MenuButton";
import Navigation from "./Navigation";

export default function Footer() {
	return (
		// Curved gradient background
		<footer
			className="w-full h-[300px] pt-4 bg-no-repeat bg-center
			lg:mt-[200px]
			xl:bg-cover xl:h-[300px]"
			style={{
				backgroundImage: `url(${Background})`,
			}}>
			<div
				className="flex justify-between items-center px-[40px] mx-auto
				lg:px-[80px] lg:w-[1024px]
				xl:px-[120px] xl:w-[1440px]">
				{/* Logo */}
				<button className="mt-[190px]">
					<img className="w-[200px]" src={Logo} alt="swift sites logo" />
				</button>
				<div className="mt-[195px] xl:hidden">
					<MenuButton />
				</div>
				<div className="hidden xl:flex mt-[195px]">
					<Navigation />
				</div>
			</div>
		</footer>
	);
}
