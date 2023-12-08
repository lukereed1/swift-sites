import MoneyPhone from "../../assets/iphone-coins.svg";
import SecondaryCard from "../../components/SecondaryCard";
import SemiCircle from "../../assets/small-yellow-blob.svg";

export default function Costs() {
	return (
		<section className="flex flex-col px-[40px]">
			<div className="text-center">
				<h2 className="text-[28px] font-bold mt-20">
					<span className="text-[#0066FF]">$0 </span> Down,{" "}
					<span className="text-[#0066FF]">$300 </span> Per Month
				</h2>
				<p className="mt-1">
					$0 down for a standard five page website, with an ongoing $300 per
					month commitment for a minimum of 12 months. Custom pricing options
					are available if you require more than five pages.
				</p>
			</div>
			<img className="" src={MoneyPhone} alt="iphone with coins on it" />
			<div className="flex flex-wrap">
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
			<div className="absolute bottom-[-2200px] left-0">
				<img src={SemiCircle} alt="" />
			</div>
		</section>
	);
}
