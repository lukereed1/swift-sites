import navlinks from "../config/navlinks";

export default function Navigation() {
	return (
		<ul
			className="hidden text-white gap-16 text-xl
            xl:flex">
			{navlinks.map(({ title, path }) => (
				<a href="#">
					<li key={path}>{title}</li>
				</a>
			))}
		</ul>
	);
}
