import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
	const {
		user,
		setUser,
		authenticated,
		setAuthenticated,
		handleLogin,
		handleLogout,
		handleRegister,
	} = useContext(AuthContext);

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
