import { useInterface } from "../../hooks/useInterface";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useMarkers } from "../../hooks/useMarkers";
import { navLinks } from "../../constants/navlinks";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
	const { openMenu, setOpenMenu } = useInterface();
	const { gpsTracking, setGpsTracking } = useMarkers();
	const { authenticated, handleLogout } = useAuth();

	const handleGpsTracking = () => {
		setOpenMenu(false);
		if (gpsTracking === false) {
			const confirmed = window.confirm(
				"A atualização automática poderá consumir mais dados de sua internet, deseja continuar?"
			);
			confirmed && setGpsTracking(true);
		} else {
			setGpsTracking(false);
		}
	};

	return (
		<>
			<S.Navbar active={openMenu}>
				<div className="links">
					{navLinks.map((navlink) => (
						<Link
							key={navlink.span}
							to={navlink.href}
							className="links__a"
							onClick={() => setOpenMenu(false)}
						>
							{navlink.span}
						</Link>
					))}
				</div>

				{authenticated ? (
					<button
						className="auth-btn"
						onClick={() => {
							setOpenMenu(false);
							handleLogout();
						}}
					>
						Sair
					</button>
				) : (
					<Link
						to={"/auth"}
						className="auth-btn"
						onClick={() => setOpenMenu(false)}
					>
						Acesso
					</Link>
				)}
				<S.GpsTracking active={gpsTracking}>
					<button className="switcher-btn" onClick={handleGpsTracking} />
					<span className="switcher-span">{gpsTracking ? "ON" : "OFF"}</span>
					<span> Localização automática</span>
				</S.GpsTracking>
			</S.Navbar>
		</>
	);
};

export default Navbar;
