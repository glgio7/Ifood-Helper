import { createContext, useEffect, useState } from "react";
import { AuthProviderProps, IAuthContext, IUser } from "./types";
import axios from "axios";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [authenticated, setAuthenticated] = useState(false);

	const token = localStorage.getItem("token");

	const handleLoginWithToken = async () => {
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
			console.log(error);
		}
	};

	useEffect(() => {
		if (token) {
			handleLoginWithToken();
		}
	}, []);

	console.log(user);

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
