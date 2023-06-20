import { createContext, useCallback, useEffect, useState } from "react";
import { AuthProviderProps, IAuthContext, IUser } from "./types";
import axios, { AxiosError } from "axios";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [authenticated, setAuthenticated] = useState(false);

	const token = localStorage.getItem("token");

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
	};

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
