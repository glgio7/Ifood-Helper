import InputContainer from "../../components/InputContainer";
import smile from "../../assets/ifood-smile-white.svg";
import * as S from "./styles";

export const Login = () => {
	return (
		<S.Login>
			<img src={smile} alt="Ifood Helper" className="title-image" />
			<form onSubmit={() => {}}>
				<InputContainer
					id="email"
					type="text"
					placeholder="Email"
					onChange={() => {}}
				/>
				<InputContainer
					id="password"
					type="password"
					placeholder="Senha"
					onChange={() => {}}
				/>

				<button type="submit" className="auth-btn login">
					ENTRAR
				</button>
			</form>
		</S.Login>
	);
};

export default Login;
