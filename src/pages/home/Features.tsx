import Card from "../../components/Card";
import PrimaryButton from "../../components/PrimaryButton";
import LaptopIcon from "../../assets/laptop-icon.svg";
import MobileIcon from "../../assets/mobile-icon.svg";
import RunningIcon from "../../assets/running-icon.svg";
import HandshakeIcon from "../../assets/handshake-icon.svg";
import PaintBrushIcon from "../../assets/paintbrush-icon.svg";
import SmallLaptopIcon from "../../assets/small-laptop-icon.svg";
import RocketIcon from "../../assets/rocket-icon.svg";
import SupportIcon from "../../assets/support-icon.svg";

export default function Features() {
	return (
		<section className="flex flex-col items-center px-[40px] mt-20 sm:mt-44">
			{/* WHY CHOOSE US SECTION */}
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

			{/* FEATURES SECTION */}
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
			</div>

			{/* HOW IT WORKS SECTION */}
			<h2 className="text-[28px] font-bold mt-24">
				<span className="text-[#0066FF]">HOW</span> IT WORKS
			</h2>

			<div className="flex flex-col text-center mt-7">
				<Card imageUrl={HandshakeIcon} heading="Initial Consultation">
					Get started by scheduling a no strings attached consultation with us.
					Share your vision, business goals, and any specific website
					requirements
				</Card>

				<Card imageUrl={PaintBrushIcon} heading="Design Phase">
					Our expert team crafts a tailored design concept based on your
					preferences
				</Card>

				<Card imageUrl={SmallLaptopIcon} heading="Development Phase">
					Once you approve a design, we bring your website to life!
				</Card>

				<Card imageUrl={RocketIcon} heading="Launch!">
					After rigorous testing to ensure your website is perfect. Upon your
					approval, we deploy your website, making it accessible to your target
					audience
				</Card>

				<Card imageUrl={SupportIcon} heading="Post-Launch Support">
					Enjoy peace of mind with our ongoing support. We’re here to address
					any updates or inquiries you may have.
				</Card>
			</div>
		</section>
	);
}
