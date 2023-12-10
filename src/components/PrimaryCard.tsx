import { ReactNode } from "react";

interface Props {
	imageUrl: string;
	heading: string;
	children: ReactNode;
	largeFont?: boolean;
	leftAlign?: boolean;
}

export default function PrimaryCard({
	imageUrl,
	heading,
	children,
	largeFont,
	leftAlign,
}: Props) {
	return (
		<div
			className={`flex flex-col items-center text-center 
			${leftAlign ? "lg:flex-row gap-5 lg:w-[420px]" : "flex-col lg:w-[330px]"} `}>
			<img
				className={`${
					largeFont ? "h-[80px] lg:h-[100px]" : "h-[50px] lg:h-[70px]"
				}`}
				src={imageUrl}
				alt={heading}
			/>
			<div className={`${leftAlign ? "lg:text-left" : "text-center"}`}>
				<h3
					className={`mt-2 font-bold ${
						largeFont ? "text-lg lg:text-xl" : "text-base lg:text-lg"
					} lg:mt-4`}>
					{heading}
				</h3>
				<p
					className={`mt-1 ${
						largeFont ? "text-base lg:text-lg" : "text-sm lg:text-base"
					}`}>
					{children}
				</p>
			</div>
		</div>
	);
}
