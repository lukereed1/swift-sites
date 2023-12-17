import navlinks from "../config/navlinks";

export default function Navigation() {
	return (
		<ul
			className="hidden text-white gap-16 text-xl          
            xl:flex">
			{navlinks.map(({ title, path }) => (
				<a key={path} href="#">
					<li className="hover:text-yellow-300" key={path}>
						{title}
					</li>
				</a>
			))}
		</ul>
	);
}
