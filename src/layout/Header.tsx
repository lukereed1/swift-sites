import Logo from "../assets/logo.svg";
import MenuButton from "../components/MenuButton";

export default function Header() {
	return (
		<header
			className="flex justify-between pt-3 px-[40px] mx-auto
			lg:max-w-[1024px] lg:px-[80px]">
			<button>
				<img
					className="w-[200px] lg:w-[280px]"
					src={Logo}
					alt="swift sites logo"
				/>
			</button>
			<MenuButton />
		</header>
	);
}
