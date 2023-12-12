import { ReactNode } from "react";

interface Props {
	imageUrl: string;
	heading: string;
	children: ReactNode;
	largeFont?: boolean;
	leftAlign?: boolean;
	isDarkMode: boolean;
}

export default function PrimaryCard({
	imageUrl,
	heading,
	children,
	largeFont,
	leftAlign,
	isDarkMode,
}: Props) {
	return (
		<div
			className={`flex flex-col items-center text-center  ${
				largeFont ? "max-w-[720px]" : "max-w-[550px]"
			} 
			${
				leftAlign
					? "lg:flex-row lg:gap-5 lg:w-[420px] xl:w-[600px]"
					: "flex-col lg:w-[330px]"
			} `}>
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
						isDarkMode ? "text-[#48AFFD]" : "text-black"
					} ${
						largeFont ? "text-lg lg:text-xl xl:text-2xl" : "text-lg xl:text-xl"
					} lg:mt-4 xl:mt-6`}>
					{heading}
				</h3>
				<p
					className={`mt-1 xl:mt-2 ${
						isDarkMode ? "text-white" : "text-black"
					} ${
						largeFont
							? "text-base lg:text-lg xl:text-xl"
							: "text-base lg:text-base xl:text-lg"
					}`}>
					{children}
				</p>
			</div>
		</div>
	);
}
