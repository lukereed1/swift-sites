import Background from "/background.svg";
import DarkBackground from "/dark-background.svg";
import PrimaryButton from "../../components/PrimaryButton";
import Laptop from "../../assets/laptop-hero.svg";
import SecondaryButton from "../../components/SecondaryButton";
import Switch from "react-switch";

interface Props {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

export default function Hero({ isDarkMode, toggleDarkMode }: Props) {
	function handleSwitch() {
		toggleDarkMode();
	}

	const background = isDarkMode ? DarkBackground : Background;

	return (
		// Curved gradient background
		<section
			className="flex justify-center w-full h-[575px] mt-[-90px] bg-no-repeat bg-cover
			lg:mt-[-108px] lg:h-[740px]
			xl:mt-[-824px] xl:h-[1765px]"
			style={{
				backgroundImage: `url(${background})`,
			}}>
			<div
				className="hidden lg:flex flex-col gap-2 items-center absolute ml-[815px] mt-[120px] z-20
				xl:ml-[1125px] xl:mt-[850px]
				2xl:ml-[1190px]">
				<Switch
					onColor="#48AFFD"
					onChange={() => handleSwitch()}
					checked={isDarkMode}
				/>
				<p className="text-xl text-white">dark</p>
			</div>
			{/* Hero text and buttons */}
			<div
				className={`flex flex-col mt-[120px] px-[40px] text-center text-white
				lg:text-left lg:mt-[145px] lg:px-[80px] lg:w-[1024px]
				xl:mt-[875px] xl:px-[120px] xl:w-[1440px]
				2xl:w-[1920px] 2xl:px-[180px] 2xl:mt-[900px]`}>
				<div className="flex flex-col">
					<h1
						className="text-[30px] font-bold leading-10 max-w-[800px]
						lg:text-[48px] lg:leading-[60px]
						xl:text-[50px] xl:leading-[68px]
						2xl:text-[60px] 2xl:max-w-[900px]">
						Website Design and
						<br className="hidden lg:flex" /> Development for Small
						<br className="hidden lg:flex" /> Businesses
					</h1>
					<h2
						className="mt-3 text-lg
						lg:text-xl lg:mt-4
						xl:text-2xl">
						Elevate your business with our simple, yet
						<br className="hidden lg:flex" /> powerful solutions
					</h2>
					<div
						className="mt-4
						lg:flex lg:mt-6 lg:gap-2
						xl:mt-10">
						<PrimaryButton text="Get in Touch!" />
						<div className="hidden lg:flex">
							<SecondaryButton text="Our Story" />
						</div>
					</div>
				</div>

				{/* Hero image */}
				<img
					className="w-full max-w-[450px] mx-auto
					lg:absolute lg:ml-[420px] lg:mt-[50px] lg:max-w-[470px]
					xl:ml-[570px] xl:mt-[-80px] xl:max-w-[660px]
					2xl:ml-[700px] 2xl:mt-[-115px] 2xl:max-w-[900px]"
					src={Laptop}
					alt="laptop"
				/>
			</div>
		</section>
	);
}
