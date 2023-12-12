import { AiOutlineClose } from "react-icons/ai";
import navlinks from "../config/navlinks";

interface Props {
	handleSideMenu: () => void;
	sideMenuOpen: boolean;
}

export default function SideMenu({ handleSideMenu, sideMenuOpen }: Props) {
	return (
		<div
			className={`fixed right-0 top-0 bg-blue-700 h-full duration-300 z-10 ${
				sideMenuOpen ? "w-[60%] lg:w-[40%]" : "w-[0%]"
			}`}>
			<div className="pl-3 pt-3">
				<button className="text-white" onClick={() => handleSideMenu()}>
					<AiOutlineClose size={40} />
				</button>
			</div>
			<ul
				className={`flex flex-col items-center gap-3 uppercase text-white text-lg ${
					sideMenuOpen ? "flex" : "hidden"
				}`}>
				{navlinks.map(({ title, path }) => (
					<a className="w-full text-center" href="#" key={path}>
						<li key={path} className="hover:bg-blue-100 hover:text-black">
							{title}
						</li>
					</a>
				))}
			</ul>
		</div>
	);
}
