import Card from "../../components/PrimaryCard";
import PrimaryButton from "../../components/PrimaryButton";
import LaptopIcon from "../../assets/laptop-icon.svg";
import MobileIcon from "../../assets/mobile-icon.svg";
import RunningIcon from "../../assets/running-icon.svg";
import SemiCircle from "../../assets/small-yellow-blob.svg";

export default function Features() {
	return (
		<section
			className="flex flex-col items-center px-[40px] mt-20
			sm:mt-44
			lg:mt-0">
			{/* WHY CHOOSE US */}
			<div className="flex flex-col items-center text-center mb-14">
				<h2 className="text-[28px] font-bold">
					<span className="text-[#0066FF]">WHY</span> CHOOSE US
				</h2>

				<p className="text-s mt-2">
					We deliver elegant web solutions tailored to meet your specific needs.
					Our team combines simplicity and sophistication to create impactful
					digital experiences for your business
				</p>

				<div className="mt-3">
					<PrimaryButton text="Learn More" />
				</div>
			</div>

			{/* FEATURES */}
			<div className="flex flex-col gap-11">
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
				<div className="absolute bottom-[-700px] left-0 }">
					<img src={SemiCircle} alt="yellow semi circle" />
				</div>
			</div>
		</section>
	);
}
