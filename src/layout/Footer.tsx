import Background from "../assets/footer-background.svg";
import Logo from "../assets/logo.svg";
import MenuButton from "../components/MenuButton";

export default function Footer() {
	return (
		// Curved gradient background
		<footer
			className="w-full h-[300px] pt-4 bg-no-repeat bg-center
			lg:mt-[200px]"
			style={{
				backgroundImage: `url(${Background})`,
			}}>
			<div
				className="flex justify-between px-[40px] mx-auto
				lg:px-[80px] lg:w-[1024px]">
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
