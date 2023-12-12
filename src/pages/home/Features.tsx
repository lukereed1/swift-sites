import Card from "../../components/PrimaryCard";
import PrimaryButton from "../../components/PrimaryButton";
import LaptopIcon from "../../assets/laptop-icon.svg";
import MobileIcon from "../../assets/mobile-icon.svg";
import RunningIcon from "../../assets/running-icon.svg";
import SmallSemiCircle from "../../assets/small-semicircle.svg";
import MediumSemiCircle from "../../assets/medium-semicircle.svg";

export default function Features() {
	return (
		<section
			className="flex flex-col items-center mt-20
			sm:mt-44
			lg:mt-0
			xl:mt-28">
			{/* Why choose us with Learn More button */}
			<div
				className="flex flex-col items-center text-center px-[40px] max-w-[720px]
					lg:max-w-[850px]
					xl:max-w-[1200px]">
				<h2
					className="text-[32px] font-bold
					lg:text-4xl
					xl:text-[45px]">
					<span className="text-[#0066FF]">WHY</span> CHOOSE US
				</h2>

				<p
					className="mt-2
					lg:text-lg lg:mt-3
					xl:text-2xl xl:mt-6">
					We deliver elegant web solutions tailored to meet your specific needs.
					Our team combines simplicity and sophistication to create impactful
					digital experiences for your business
				</p>

				<div className="mt-3 lg:mt-5 xl:mt-7">
					<PrimaryButton text="Learn More" />
				</div>
			</div>

			{/* Feature cards */}
			<div
				className="flex flex-col justify-center gap-11 mt-14 px-[40px]
				lg:flex-row lg:flex-wrap lg:px-[80px] lg:gap-16
				xl:mt-28">
				<Card
					imageUrl={LaptopIcon}
					heading="Responsive Design"
					largeFont={true}>
					Our websites adapt to various screen sizes, ensuring a consistent and
					user-friendly experience across devices.
				</Card>

				<Card
					imageUrl={MobileIcon}
					heading="Mobile-First Design"
					largeFont={true}>
					We prioritise a mobile-first approach in our design and development
					process. Then extend on that to cater for tablet and desktop.
				</Card>

				<Card
					imageUrl={RunningIcon}
					heading="Fast Loading Times"
					largeFont={true}>
					Our commitment to speed ensures that your website loads quickly,
					enhancing user satisfaction.
				</Card>

				{/* Yellow semicircles on sides */}
				<div
					className="absolute bottom-[-700px] left-0
					lg:hidden">
					<img src={SmallSemiCircle} alt="yellow semi circle" />
				</div>
				<div
					className="hidden absolute bottom-[-1100px] left-0 z-[-1]
					lg:flex
					xl:bottom-[-1200px]">
					<img src={MediumSemiCircle} alt="yellow semi circle" />
				</div>
			</div>
		</section>
	);
}
