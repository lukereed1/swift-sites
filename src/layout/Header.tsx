import Logo from "../assets/logo.svg";
import MenuButton from "../components/MenuButton";
import Navigation from "./Navigation";

export default function Header() {
	return (
		<header
			className="flex justify-between items-center pt-3 px-[40px] mx-auto
			lg:max-w-[1024px] lg:px-[80px]
			xl:max-w-[1440px] xl:px-[120px] xl:pt-7">
			<button>
				<img
					className="w-[200px] lg:w-[280px]"
					src={Logo}
					alt="swift sites logo"
				/>
			</button>

			{/* Hamburger menu for Mobile and Tablet, Navlinks for Desktop (+1440px) */}
			<div>
				<Navigation />
				<MenuButton />
			</div>
		</header>
	);
}
