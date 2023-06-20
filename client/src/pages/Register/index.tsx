import InputContainer from "../../components/InputContainer";
import smile from "../../assets/ifood-smile.svg";
import * as S from "./styles";
import { useState } from "react";
import { INewUser } from "../../contexts/AuthContext/types";
import { RiLockLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";

export const Register = () => {
	const { handleRegister } = useAuth();

	const [newUser, setNewUser] = useState<INewUser>({} as INewUser);
	const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

	const handleChangeNewUser = (prop: string, value: string) => {
		setNewUser((prevState) => {
			return {
				...prevState,
				[prop]: value,
			};
		});
	};

	const passwordMatch = passwordConfirmation === newUser.password;

	return (
		<S.Register>
			<img src={smile} alt="Ifood Helper" className="title-image" />
			<form onSubmit={(e) => handleRegister(e, newUser)}>
				<InputContainer
					value={newUser.email}
					onChange={(e) => handleChangeNewUser("email", e.target.value)}
					id="email"
					type="text"
					placeholder="Insira um email válido"
				/>
				<InputContainer
					value={newUser.name}
					onChange={(e) => handleChangeNewUser("name", e.target.value)}
					id="name"
					type="text"
					placeholder="Seu nome aqui"
				/>
				<InputContainer
					value={newUser.username}
					onChange={(e) => handleChangeNewUser("username", e.target.value)}
					id="username"
					type="text"
					placeholder="Insira um nome de usuario"
				/>
				<InputContainer
					value={newUser.password}
					onChange={(e) => handleChangeNewUser("password", e.target.value)}
					id="password"
					type="password"
					placeholder="Senha"
				/>
				<InputContainer
					value={passwordConfirmation}
					onChange={(e) => setPasswordConfirmation(e.target.value)}
					id="password-confirmation"
					type="password"
					placeholder="Confirme sua senha"
				/>
				<button type="submit" className="auth-btn" disabled={!passwordMatch}>
					{passwordMatch ? "REGISTRAR" : <RiLockLine />}
				</button>
			</form>
		</S.Register>
	);
};

export default Register;
