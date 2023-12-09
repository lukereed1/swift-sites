import { AiOutlineClose } from "react-icons/ai";

interface Props {
	handleSideMenu: () => void;
	sideMenuOpen: boolean;
}

export default function SideMenu({ handleSideMenu, sideMenuOpen }: Props) {
	return (
		<div
			className={`fixed right-0 top-0 bg-[#0143C7] h-full duration-300 ${
				sideMenuOpen ? "w-[50%]" : "w-0"
			}`}>
			<div className="pl-3 pt-3">
				<button className="text-white" onClick={() => handleSideMenu()}>
					<AiOutlineClose size={40} />
				</button>
			</div>
		</div>
	);
}
