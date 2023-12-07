import Logo from "../assets/logo.svg";
import { RiMenu5Fill } from "react-icons/ri";

export default function Header() {
	return (
		<header className="flex justify-between pt-4 pl-4 pr-8">
			<button>
				<img className="w-[200px]" src={Logo} alt="swift sites logo" />
			</button>
			<button className="text-white">
				<RiMenu5Fill size={50} />
			</button>
		</header>
	);
}
