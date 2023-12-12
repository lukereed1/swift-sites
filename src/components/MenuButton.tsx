import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import SideMenu from "../layout/SideMenu";

interface Props {
	isDarkMode: boolean;
}

export default function MenuButton({ isDarkMode }: Props) {
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	function handleSideMenu() {
		setSideMenuOpen(!sideMenuOpen);
		console.log("test");
	}

	return (
		<div
			className="flex
			xl:hidden">
			<SideMenu
				isDarkMode={isDarkMode}
				handleSideMenu={handleSideMenu}
				sideMenuOpen={sideMenuOpen}
			/>
			<button onClick={() => handleSideMenu()} className="text-white">
				<RiMenu5Fill size={50} />
			</button>
		</div>
	);
}
