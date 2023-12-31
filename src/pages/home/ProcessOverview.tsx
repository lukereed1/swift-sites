import Card from "../../components/PrimaryCard";
import HandshakeIcon from "../../assets/handshake-icon.svg";
import PaintBrushIcon from "../../assets/paintbrush-icon.svg";
import SmallLaptopIcon from "../../assets/small-laptop-icon.svg";
import RocketIcon from "../../assets/rocket-icon.svg";
import SupportIcon from "../../assets/support-icon.svg";
import PrimaryButton from "../../components/PrimaryButton";
import MobileStack from "../../assets/mobiles-howitworks.svg";
import SmallSemiCircle from "../../assets/small-semicircle.svg";
import MediumSemiCircle from "../../assets/medium-semicircle.svg";
import LargeSemiCircle from "../../assets/large-semicircle.svg";

interface Props {
	isDarkMode: boolean;
}
export default function ProcessOverview({ isDarkMode }: Props) {
	return (
		<section className="flex flex-col items-center text-center">
			{/* How it works */}
			<h2
				className={`text-[32px] font-bold mt-28 ${
					isDarkMode ? "text-white" : "text-black"
				}
				lg:mt-40 lg:text-4xl
				xl:mt-44 xl:text-[45px]`}>
				<span className={`${isDarkMode ? "text-[#48AFFD]" : "text-[#0066FF]"}`}>
					HOW
				</span>{" "}
				IT WORKS
			</h2>

			{/* Process cards */}
			<div
				className="flex justify-between px-[40px]
				lg:mt-4 lg:px-[80px]
				xl:px-[120px]">
				<div
					className="flex flex-col text-center mt-4 gap-9
					xl:mt-8">
					<Card
						isDarkMode={isDarkMode}
						leftAlign={true}
						imageUrl={HandshakeIcon}
						heading="Initial Consultation">
						Get started by scheduling a no strings attached consultation with
						us. Share your vision, business goals, and any specific website
						requirements
					</Card>
					<Card
						isDarkMode={isDarkMode}
						leftAlign={true}
						imageUrl={PaintBrushIcon}
						heading="Design Phase">
						Our expert team crafts a tailored design concept based on your
						preferences
					</Card>
					<Card
						isDarkMode={isDarkMode}
						leftAlign={true}
						imageUrl={SmallLaptopIcon}
						heading="Development Phase">
						Once you approve a design, we bring your website to life!
					</Card>
					<Card
						isDarkMode={isDarkMode}
						leftAlign={true}
						imageUrl={RocketIcon}
						heading="Launch!">
						After rigorous testing to ensure your website is perfect. Upon your
						approval, we deploy your website, making it accessible to your
						target audience
					</Card>
					<Card
						isDarkMode={isDarkMode}
						leftAlign={true}
						imageUrl={SupportIcon}
						heading="Post-Launch Support">
						Enjoy peace of mind with our ongoing support. We’re here to address
						any updates or inquiries you may have.
					</Card>
				</div>

				{/* Process image */}
				<div
					className="hidden lg:flex h-[390px] mt-[120px] ml-11
				xl:h-[520px] xl:mr-[-90px] xl:mt-[160px]">
					<img src={MobileStack} alt="stack of phones" />
				</div>

				{/* Yellow semicircles on sides */}
				<div
					className={`absolute bottom-[-1650px] right-0 scale-x-[-1] z-[1] ${
						isDarkMode ? "hidden" : ""
					}
					lg:hidden`}>
					<img src={SmallSemiCircle} alt="yellow semi circle" />
				</div>
				<div
					className={`hidden absolute bottom-[-1550px] right-0 scale-x-[-1] z-[-1] ${
						isDarkMode ? "lg:hidden" : ""
					}
					lg:flex
					xl:hidden`}>
					<img src={MediumSemiCircle} alt="yellow semi circle" />
				</div>
				<div
					className={`hidden absolute bottom-[-2150px] right-0 scale-x-[-1] z-[1] ${
						isDarkMode ? "xl:hidden" : ""
					}
					lg:hidden
					xl:flex`}>
					<img src={LargeSemiCircle} alt="yellow semi circle" />
				</div>
			</div>

			<div className="mt-6 lg:mt-14">
				<PrimaryButton text="Our Services" />
			</div>
		</section>
	);
}
