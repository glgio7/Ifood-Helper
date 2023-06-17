import { Route, Routes } from "react-router-dom";
import Home from "../pages/Index";
import About from "../pages/About";
import AuthPage from "../pages/AuthPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sobre" element={<About />} />
			<Route path="/auth" element={<AuthPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
};

export default AppRoutes;
