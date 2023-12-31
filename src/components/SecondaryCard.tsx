import { ReactNode } from "react";
import YellowTick from "../assets/yellow-tick.svg";

interface Props {
	heading: string;
	children: ReactNode;
	isDarkMode: boolean;
}

export default function SecondaryCard({
	heading,
	children,
	isDarkMode,
}: Props) {
	return (
		<div className="flex flex-col items-center text-center">
			<img
				className="w-[50px] xl:w-[70px]"
				src={YellowTick}
				alt="yellow tick"
			/>
			<h3
				className={`text-lg font-bold ${
					isDarkMode ? "text-[#48AFFD]" : "text-black"
				}
				xl:text-2xl`}>
				{heading}
			</h3>
			<p className={`text-lg ${isDarkMode ? "text-white" : "text-black"}`}>
				{children}
			</p>
		</div>
	);
}
