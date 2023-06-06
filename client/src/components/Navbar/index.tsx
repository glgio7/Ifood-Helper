import * as S from "./styles";
import { RiHome3Fill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	const navLinks = [
		{
			span: "Início",
			href: "/",
		},
		{
			span: "Score",
			href: "/",
		},
		{
			span: "Ajuda",
			href: "/",
		},
		{
			span: "Sobre",
			href: "/",
		},
	];

	return (
		<>
			<S.Navbar active={menuOpen}>
				<div className="nav-links">
					{navLinks.map((navlink) => (
						<Link
							key={navlink.span}
							to={navlink.href}
							onClick={() => setMenuOpen(false)}
						>
							{navlink.span}
						</Link>
					))}
				</div>
			</S.Navbar>
			<RiHome3Fill
				className="menu-btn"
				onClick={() => setMenuOpen(!menuOpen)}
			/>
		</>
	);
};

export default Navbar;
