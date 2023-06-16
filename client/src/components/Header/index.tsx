import * as S from "./styles";
import icon from "../../assets/ifood-smile.svg";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { useInterface } from "../../hooks/useInterface";

const Header = () => {
	const { openMenu, setOpenMenu } = useInterface();

	const navigate = useNavigate();
	return (
		<S.Header>
			<h1
				onClick={() => {
					navigate("/");
					setOpenMenu(false);
				}}
			>
				<span>ifood</span>
				<img src={icon} alt="" className="logo-icon" />
				<span>helper</span>
			</h1>
			<RiMenuLine
				onClick={() => setOpenMenu(!openMenu)}
				className={"menu-btn"}
			/>
			<Navbar />
		</S.Header>
	);
};

export default Header;
