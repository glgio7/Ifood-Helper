import { useInterface } from "../../hooks/useInterface";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useMarkers } from "../../hooks/useMarkers";

const Navbar = () => {
	const { openMenu, setOpenMenu } = useInterface();
	const { gpsTracking, setGpsTracking } = useMarkers();

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
			href: "/sobre",
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
				<S.GpsTracking active={gpsTracking}>
					<button
						className="switcher-btn"
						onClick={() => {
							if (gpsTracking === false) {
								const confirmed = window.confirm(
									"A atualização automática poderá consumir mais dados de sua internet, deseja continuar?"
								);
								confirmed && setGpsTracking(true);
							} else {
								setGpsTracking(false);
							}
						}}
					/>
					<span className="switcher-span">{gpsTracking ? "ON" : "OFF"}</span>
					<span> Localização automática</span>
				</S.GpsTracking>
			</S.Navbar>
		</>
	);
};

export default Navbar;
