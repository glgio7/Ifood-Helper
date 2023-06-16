import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
	const { user, setUser, authenticated, setAuthenticated } =
		useContext(AuthContext);

	return { user, setUser, authenticated, setAuthenticated };
};
