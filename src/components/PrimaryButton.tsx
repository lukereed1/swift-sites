interface Props {
	text: string;
}

export default function PrimaryButton({ text }: Props) {
	return (
		<button
			className="w-auto px-5 py-2 rounded-lg font-bold text-black text-sm bg-yellow-300 hover:bg-yellow-100
			lg:text-lg lg:px-7 lg:py-3">
			{text}
		</button>
	);
}
