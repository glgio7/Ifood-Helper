import * as S from "./styles";
import icon from "../../assets/head-icon.svg";
import { RiHome3Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<S.Header>
			<Link href={"/"} className="logo-container">
				<h1>
					<span>Ifood</span>
					<Image src={icon} alt="" className="logo-icon" />
					<span>Helper</span>
				</h1>
			</Link>
			<RiHome3Fill className="menu-btn" />
		</S.Header>
	);
};

export default Header;
