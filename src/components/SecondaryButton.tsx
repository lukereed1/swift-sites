import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
	text: string;
}

export default function SecondaryButton({ text }: Props) {
	return (
		<button
			className="flex items-center w-auto px-5 py-2 rounded-lg border border-white text-white text-sm bg-transparent
            hover:text-black hover:bg-yellow-100 hover:gap-1 transform transition duration-100
            lg:w-[180px] lg:text-lg lg:px-7 lg:py-3">
			{text}
			<IoIosArrowRoundForward size={30} />
		</button>
	);
}
