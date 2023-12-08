interface Props {
	rightSideScreen?: boolean;
	topDist: number;
}

import SemiCircle from "../assets/small-yellow-blob.svg";

export default function SmallSemiCircle(props: Props) {
	return (
		<img
			className={`absolute ${
				props.rightSideScreen ? "right-0 scale-x-[-1]" : "left-0"
			} top-[${props.topDist}px]`}
			src={SemiCircle}
			alt="background circle"
		/>
	);
}
