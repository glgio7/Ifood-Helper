import React from "react";
import { useAuth } from "../hooks/useAuth";
import AuthPage from "../pages/AuthPage";


type PrivateRouteProps = {
	children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const { authenticated } = useAuth();
	return <>{authenticated ? children : <AuthPage />}</>;
};

export default PrivateRoute;
