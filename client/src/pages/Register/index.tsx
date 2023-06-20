import InputContainer from "../../components/InputContainer";
import smile from "../../assets/ifood-smile.svg";
import * as S from "./styles";

export const Register = () => {
	return (
		<S.Register>
			<img src={smile} alt="Ifood Helper" className="title-image" />
			<form onSubmit={() => {}}>
				<InputContainer
					value=""
					onChange={() => {}}
					id="email"
					type="text"
					placeholder="Insira um email válido"
				/>
				<InputContainer
					value=""
					onChange={() => {}}
					id="name"
					type="text"
					placeholder="Seu nome aqui"
				/>
				<InputContainer
					value=""
					onChange={() => {}}
					id="username"
					type="text"
					placeholder="Insira um nome de usuario"
				/>
				<InputContainer
					value=""
					onChange={() => {}}
					id="password"
					type="password"
					placeholder="Senha"
				/>
				<InputContainer
					value=""
					onChange={() => {}}
					id="password-confirmation"
					type="password"
					placeholder="Confirme sua senha"
				/>
				<button type="submit" className="auth-btn">
					REGISTRAR
				</button>
			</form>
		</S.Register>
	);
};

export default Register;
