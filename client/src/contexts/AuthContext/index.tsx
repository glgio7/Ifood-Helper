import { createContext, useState } from "react";
import { AuthProviderProps, IAuthContext, IUser } from "./types";

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [authenticated, setAuthenticated] = useState(true);

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
