import { RiMenu5Fill } from "react-icons/ri";
import Background from "../assets/footer-background.svg";
import Logo from "../assets/logo.svg";

export default function Footer() {
	return (
		<footer
			className="w-full h-[300px] mt-[0px] pt-4 pl-4 pr-8 bg-no-repeat bg-center flex justify-between"
			style={{
				backgroundImage: `url(${Background})`,
			}}>
			<button className="mt-[150px]">
				<img className="w-[200px]" src={Logo} alt="swift sites logo" />
			</button>
			<button className="text-white mt-[150px]">
				<RiMenu5Fill size={50} />
			</button>
		</footer>
	);
}
