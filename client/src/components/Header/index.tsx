import * as S from "./styles";
import icon from "../../assets/head-icon.svg";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	return (
		<S.Header>
			<h1 onClick={() => navigate("/")}>
				<span>Ifood</span>
				<img src={icon} alt="" className="logo-icon" />
				<span>Helper</span>
			</h1>
			<Navbar />
		</S.Header>
	);
};

export default Header;
