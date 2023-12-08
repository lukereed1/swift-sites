import Background from "../../assets/background1.svg";
import PrimaryButton from "../../components/PrimaryButton";
import Laptop from "../../assets/laptop-hero.svg";

export default function HomePage() {
	return (
		<section
			className="w-full h-[575px] mt-[-90px] px-[40px] bg-no-repeat bg-cover"
			style={{
				backgroundImage: `url(${Background})`,
			}}>
			<div className="flex flex-col items-center pt-32 text-center text-white">
				<h1 className="text-[30px] font-bold leading-10">
					Website Design and Development for Small Businesses
				</h1>
				<h2 className="mt-3">
					Elevate your business with out simple, yet powerful solutions
				</h2>
				<div className="mt-4">
					<PrimaryButton text={"Get in Touch!"} />
				</div>
				<img className="w-full max-w-[400px]" src={Laptop} alt="laptop" />
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
