import Logo from "../assets/logo.svg";
import MenuButton from "../components/MenuButton";

export default function Header() {
	return (
		<header className="flex justify-between pt-4 pl-4 pr-8">
			<button>
				<img className="w-[200px]" src={Logo} alt="swift sites logo" />
			</button>
			<MenuButton />
		</header>
	);
}
