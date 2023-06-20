import * as S from "./styles";
import InputContainer from "../../components/InputContainer";
import smile from "../../assets/ifood-smile-white.svg";
import { useState } from "react";
import { IUserCredentials } from "./types";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
	const [userCredentials, setUserCredentials] = useState<IUserCredentials>(
		{} as IUserCredentials
	);

	const handleUserCredentials = (prop: string, value: string) => {
		setUserCredentials((prevState) => {
			return {
				...prevState,
				[prop]: value,
			};
		});
	};

	const { handleLogin } = useAuth();

	return (
		<S.Login>
			<img src={smile} alt="Ifood Helper" className="title-image" />
			<form onSubmit={(e) => handleLogin(e, userCredentials)}>
				<InputContainer
					value={userCredentials.email}
					id="email"
					type="text"
					placeholder="Email"
					onChange={(e) => handleUserCredentials("email", e.target.value)}
				/>
				<InputContainer
					value={userCredentials.password}
					id="password"
					type="password"
					placeholder="Senha"
					onChange={(e) => handleUserCredentials("password", e.target.value)}
				/>

				<button type="submit" className="auth-btn login">
					ENTRAR
				</button>
			</form>
		</S.Login>
	);
};

export default Login;
