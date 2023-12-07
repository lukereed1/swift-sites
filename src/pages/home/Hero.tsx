import Background from "../../assets/background.svg";

export default function HomePage() {
	return (
		<section className="w-full">
			<div
				className="w-full h-[530px] bg-no-repeat bg-cover mt-[-90px] px-[40px]"
				style={{
					backgroundImage: `url(${Background})`,
				}}></div>
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
