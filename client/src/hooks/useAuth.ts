import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { INewUser, IUser } from "../contexts/AuthContext/types";
import axios, { AxiosError } from "axios";
import { IUserCredentials } from "../pages/Login/types";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
	const navigate = useNavigate();

	const { user, setUser, authenticated, setAuthenticated } =
		useContext(AuthContext);

	const handleRegister = async (
		e: React.FormEvent<HTMLFormElement>,
		newUser: INewUser
	) => {
		e.preventDefault();
		try {
			await axios
				.post(`${import.meta.env.VITE_APP_API_URL}/auth/signup`, newUser)
				.then((res) => {
					return res.data;
				});

			alert("Obrigado por se registrar! Faça login para começar a usar o app.");

			navigate("/login");
		} catch (error) {
			if (error instanceof AxiosError) {
				alert(error.response?.data);
			} else {
				console.log(error);
			}
		}
	};

	const handleLogin = async (
		e: React.FormEvent<HTMLFormElement>,
		userCredentials: IUserCredentials
	) => {
		e.preventDefault();

		try {
			const response: IUser = await axios
				.post(
					`${import.meta.env.VITE_APP_API_URL}/auth/signin`,
					userCredentials
				)
				.then((response) => {
					return response.data;
				});

			const { email, name, username, createdAt, token, score } = response;

			setUser({ email, name, username, createdAt, token, score });
			setAuthenticated(true);
			navigate("/");

			if (token) {
				localStorage.setItem("token", token);
			}
		} catch (error) {
			if (error instanceof AxiosError) {
				alert(error.response?.data);
			} else {
				console.log(error);
			}
		}
	};

	const handleLogout = () => {
		setAuthenticated(false);
		setUser(null);
		localStorage.removeItem("token");
	};

	return {
		user,
		setUser,
		authenticated,
		setAuthenticated,
		handleLogin,
		handleLogout,
		handleRegister,
	};
};
