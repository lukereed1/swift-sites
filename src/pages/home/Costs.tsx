import MoneyPhone from "../../assets/iphone-coins.svg";
import SecondaryCard from "../../components/SecondaryCard";
import PrimaryButton from "../../components/PrimaryButton";
import SmallSemiCircle from "../../assets/small-semicircle.svg";
import MediumSemiCircle from "../../assets/medium-semicircle.svg";

export default function Costs() {
	return (
		<section className="flex flex-col items-center">
			<div
				className="text-center px-[40px]
				lg:px-[80px]">
				<h2 className="text-[28px] font-bold mt-20">
					<span className="text-[#0066FF]">$0 </span> Down,{" "}
					<span className="text-[#0066FF]">$300 </span> Per Month
				</h2>
				<p
					className="mt-1
					lg:w-[880px] lg:text-lg">
					$0 down for a standard five page website, with an ongoing $300 per
					month commitment for a minimum of 12 months. Custom pricing options
					are available if you require more than five pages.
				</p>
			</div>
			<div
				className="flex flex-col px-[40px]
				lg:flex-row lg:px-[80px]">
				<img
					className="lg:ml-[-130px] lg:mt-[-70px]"
					src={MoneyPhone}
					alt="iphone with coins on it"
				/>
				<div
					className="flex flex-col mt-2 gap-8
					lg:mt-[75px] lg:mr-[30px]">
					<SecondaryCard heading="Hosting Fees Included">
						Hosting fees are built in to your monthly payment
					</SecondaryCard>

					<SecondaryCard heading="Unlimited Edits">
						Change anything you want on the site, just let us know!
					</SecondaryCard>

					<SecondaryCard heading="Web Design & Development">
						Cost includes design, development, testing, and deployment
					</SecondaryCard>

					<SecondaryCard heading="Google Analytics">
						We install Google Analytics to monitor your website traffic
					</SecondaryCard>
				</div>
				<div
					className="absolute bottom-[-2600px] left-0
					lg:hidden">
					<img src={SmallSemiCircle} alt="" />
				</div>
				<div
					className="hidden absolute bottom-[-2900px] left-0 z-[-1]
					lg:flex">
					<img src={MediumSemiCircle} alt="" />
				</div>
			</div>

			<div className="mt-7 lg:mt-[80px]">
				<PrimaryButton text="View our Work" />
			</div>
		</section>
	);
}
