import { createContext, useCallback, useEffect, useState } from "react";
import { AuthProviderProps, IAuthContext, INewUser, IUser } from "./types";
import axios, { AxiosError } from "axios";
import { IUserCredentials } from "../../pages/Login/types";
import { useNavigate } from "react-router-dom";
import { trimUserProps } from "../../utils/trimNewUserProps";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [authenticated, setAuthenticated] = useState(false);

	const token = localStorage.getItem("token");

	const navigate = useNavigate();

	/////// Sign up function

	const handleRegister = useCallback(
		async (e: React.FormEvent<HTMLFormElement>, newUser: INewUser) => {
			e.preventDefault();

			/////// This function prevents blank spaces at the end and start of strings props
			const user = trimUserProps(newUser);

			try {
				await axios
					.post(`${import.meta.env.VITE_APP_API_URL}/auth/signup`, user)
					.then((res) => {
						return res.data;
					});

				alert(
					"Obrigado por se registrar! Faça login para começar a usar o app."
				);

				navigate("/login");
			} catch (error) {
				if (error instanceof AxiosError) {
					alert(error.response?.data);
				} else {
					console.log(error);
				}
			}
		},
		[]
	);

	///// Sign in / Sign out functions

	const handleLoginWithToken = useCallback(async () => {
		try {
			const response: IUser = await axios
				.post(`${import.meta.env.VITE_APP_API_URL}/auth/token`, {
					token: token,
				})
				.then((res) => {
					return res.data;
				});

			const { email, name, username, createdAt, score } = response;

			setAuthenticated(true);
			setUser({ email, name, username, createdAt, score });
		} catch (error) {
			if (error instanceof AxiosError) {
				alert("Sua sessão expirou.");
				localStorage.removeItem("token");
				console.log(error.response?.data);
			} else {
				console.log(error);
			}
		}
	}, []);

	const handleLogin = useCallback(
		async (
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
		},
		[]
	);

	const handleLogout = () => {
		setAuthenticated(false);
		setUser(null);
		localStorage.removeItem("token");
	};

	useEffect(() => {
		if (token) {
			handleLoginWithToken();
		}
	}, []);

	const contextValue = {
		user,
		setUser,
		authenticated,
		setAuthenticated,
		handleLogin,
		handleLogout,
		handleRegister,
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
