import Logo from "../assets/logo.svg";

export default function Header() {
	return (
		<header className="flex pt-4 px-4">
			<img className="w-[160px]" src={Logo} alt="swift sites logo" />
		</header>
	);
}
