import Card from "../../components/PrimaryCard";
import HandshakeIcon from "../../assets/handshake-icon.svg";
import PaintBrushIcon from "../../assets/paintbrush-icon.svg";
import SmallLaptopIcon from "../../assets/small-laptop-icon.svg";
import RocketIcon from "../../assets/rocket-icon.svg";
import SupportIcon from "../../assets/support-icon.svg";
import PrimaryButton from "../../components/PrimaryButton";
import SemiCircle from "../../assets/small-yellow-blob.svg";

export default function ProcessOverview() {
	return (
		<section className="flex flex-col items-center text-center px-[40px]">
			{/* HOW IT WORKS */}
			<h2 className="text-[28px] font-bold mt-20">
				<span className="text-[#0066FF]">HOW</span> IT WORKS
			</h2>

			<div className="flex flex-col text-center mt-4 gap-9">
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
				<div className="absolute bottom-[-1650px] right-0 scale-x-[-1]">
					<img src={SemiCircle} alt="yellow semi circle" />
				</div>
			</div>

			<div className="mt-6">
				<PrimaryButton text="Our Services" />
			</div>
		</section>
	);
}
