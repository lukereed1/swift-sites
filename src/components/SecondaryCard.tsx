import { ReactNode } from "react";
import YellowTick from "../assets/yellow-tick.svg";

interface Props {
	heading: string;
	children: ReactNode;
}

export default function SecondaryCard({ heading, children }: Props) {
	return (
		<div className="flex flex-col items-center text-center">
			<img
				className="w-[50px] xl:w-[70px]"
				src={YellowTick}
				alt="yellow tick"
			/>
			<h3
				className="text-lg font-bold
				xl:text-2xl">
				{heading}
			</h3>
			<p className="text-lg">{children}</p>
		</div>
	);
}
