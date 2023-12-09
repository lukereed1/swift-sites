import { useState } from "react";
import Logo from "../assets/logo.svg";
import { RiMenu5Fill } from "react-icons/ri";
import SideMenu from "./SideMenu";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	function handleSideMenu() {
		setSideMenuOpen(!sideMenuOpen);
		console.log("test");
	}

	return (
		<header className="flex justify-between pt-4 pl-4 pr-8">
			<SideMenu sideMenuOpen={sideMenuOpen} handleSideMenu={handleSideMenu} />
			<button>
				<img className="w-[200px]" src={Logo} alt="swift sites logo" />
			</button>
			<button onClick={() => handleSideMenu()} className="text-white">
				<RiMenu5Fill size={50} />
			</button>
		</header>
	);
}
