import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";
import SideMenu from "../layout/SideMenu";

export default function MenuButton() {
	const [sideMenuOpen, setSideMenuOpen] = useState(false);

	function handleSideMenu() {
		setSideMenuOpen(!sideMenuOpen);
		console.log("test");
	}

	return (
		<>
			<SideMenu handleSideMenu={handleSideMenu} sideMenuOpen={sideMenuOpen} />
			<button onClick={() => handleSideMenu()} className="text-white">
				<RiMenu5Fill size={50} />
			</button>
		</>
	);
}
