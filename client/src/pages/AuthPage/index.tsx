import { Link } from "react-router-dom";
import * as S from "./styles";

const AuthPage = () => {
	return (
		<S.AuthPage>
			<section className="container">
				<img
					src="/images/auth.svg"
					alt="Página de login"
					className="title-image"
				/>
				<h2>ACESSO DO USUÁRIO</h2>
			</section>

			<section className="auth-container">
				<Link to={"/login"} className="auth-btn login">
					ENTRAR
				</Link>
				<Link to={"/register"} className="auth-btn">
					CADASTRAR
				</Link>
			</section>
		</S.AuthPage>
	);
};

export default AuthPage;
