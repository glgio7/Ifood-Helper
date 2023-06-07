import * as S from "./styles";
import { RiHome3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useInterface } from "../../hooks/useInterface";

const Navbar = () => {
	const { openMenu, setOpenMenu } = useInterface();

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
			<S.Navbar active={openMenu}>
				<div className="nav-links">
					{navLinks.map((navlink) => (
						<Link
							key={navlink.span}
							to={navlink.href}
							onClick={() => setOpenMenu(false)}
						>
							{navlink.span}
						</Link>
					))}
				</div>
			</S.Navbar>
			<RiHome3Fill
				className="menu-btn"
				onClick={() => setOpenMenu(!openMenu)}
			/>
		</>
	);
};

export default Navbar;
