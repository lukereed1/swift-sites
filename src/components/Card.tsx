import { ReactNode } from "react";

interface Props {
	imageUrl: string;
	heading: string;
	children: ReactNode;
	largeFont?: boolean;
}

export default function Card({
	imageUrl,
	heading,
	children,
	largeFont,
}: Props) {
	return (
		<div className="flex flex-col items-center text-center">
			<img
				className={`${largeFont ? "h-[80px]" : "h-[50px]"}`}
				src={imageUrl}
				alt={heading}
			/>
			<h3 className={`mt-2 font-bold ${largeFont ? "text-lg" : "text-base"}`}>
				{heading}
			</h3>
			<p className={`mt-1 ${largeFont ? "text-base" : "text-sm"}`}>
				{children}
			</p>
		</div>
	);
}
