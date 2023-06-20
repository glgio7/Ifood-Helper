import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { IUser } from "../contexts/AuthContext/types";
import axios, { AxiosError } from "axios";
import { IUserCredentials } from "../pages/Login/types";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
	const navigate = useNavigate();

	const { user, setUser, authenticated, setAuthenticated } =
		useContext(AuthContext);

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

			const { email, name, username, createdAt, token } = response;

			setUser({ email, name, username, createdAt, token });
			setAuthenticated(true);
			navigate("/");
		} catch (error) {
			console.log(error);

			if (error instanceof AxiosError) {
				alert(error.response?.data);
			}
		}
	};

	return { user, setUser, authenticated, setAuthenticated, handleLogin };
};
