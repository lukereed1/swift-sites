import Background from "../assets/footer-background.svg";
import Logo from "../assets/logo.svg";
import MenuButton from "../components/MenuButton";

export default function Footer() {
	return (
		<footer
			className="w-full h-[300px] mt-auto pt-4 bg-no-repeat bg-center"
			style={{
				backgroundImage: `url(${Background})`,
			}}>
			<div
				className="flex justify-between px-[40px]
				lg:px-[80px]">
				<button className="mt-[180px]">
					<img className="w-[200px]" src={Logo} alt="swift sites logo" />
				</button>
				<div className="text-white mt-[195px]">
					<MenuButton />
				</div>
			</div>
		</footer>
	);
}
