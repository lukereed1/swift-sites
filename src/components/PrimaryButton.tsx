interface Props {
	text: string;
}

export default function PrimaryButton({ text }: Props) {
	return (
		<button className="w-auto px-5 py-2 rounded-lg font-bold text-black text-sm bg-yellow-300">
			{text}
		</button>
	);
}
