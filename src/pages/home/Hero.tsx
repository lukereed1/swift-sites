import Background from "../../assets/background.svg";
import PrimaryButton from "../../components/PrimaryButton";
import Laptop from "../../assets/laptop-hero.svg";
import SecondaryButton from "../../components/SecondaryButton";

export default function Hero() {
	return (
		<section
			className="flex justify-center w-full h-[575px] mt-[-90px] bg-no-repeat bg-cover
			lg:mt-[-108px] lg:h-[700px]"
			style={{
				backgroundImage: `url(${Background})`,
			}}>
			<div
				className="flex flex-col mt-[120px] px-[40px] text-center text-white
				lg:text-left lg:mt-[145px] lg:px-[80px] lg:w-[1024px]">
				<div className="flex flex-col">
					<h1
						className="text-[30px] font-bold leading-10
						lg:text-[48px] lg:leading-[60px]">
						Website Design and
						<br className="hidden lg:flex" /> Development for Small
						<br className="hidden lg:flex" /> Businesses
					</h1>
					<h2
						className="mt-3
						lg:text-xl lg:mt-4">
						Elevate your business with our simple, yet
						<br className="hidden lg:flex" /> powerful solutions
					</h2>
					<div
						className="mt-4 flex
						lg:mt-6 lg:gap-2">
						<PrimaryButton text="Get in Touch!" />
						<SecondaryButton text="Our Story" />
					</div>
				</div>

				<img
					className="w-full max-w-[400px] mx-auto
					lg:absolute lg:ml-[420px] lg:mt-[50px] lg:max-w-[470px]"
					src={Laptop}
					alt="laptop"
				/>
			</div>
		</section>
	);
}

/*

1440px
		<section className="w-full">
			<div
				className="absolute w-full h-[1500px] bg-no-repeat bg-cover mt-[-200px]"
				style={{ backgroundImage: `url(${Background})` }}></div>
		</section>

*/
