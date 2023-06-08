import { useInterface } from "../../hooks/useInterface";
import * as S from "./styles";
import { Link } from "react-router-dom";

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

				<button className="auth-btn">Entrar</button>
			</S.Navbar>
		</>
	);
};

export default Navbar;
