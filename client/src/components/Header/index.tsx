import * as S from "./styles";
import icon from "../../assets/head-icon.svg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<S.Header>
			<Link to={"/"} className="logo-container">
				<h1>
					<span>Ifood</span>
					<img src={icon} alt="" className="logo-icon" />
					<span>Helper</span>
				</h1>
			</Link>
			<Navbar />
		</S.Header>
	);
};

export default Header;
