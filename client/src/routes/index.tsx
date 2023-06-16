import { Route, Routes } from "react-router-dom";
import Home from "../pages/Index";
import About from "../pages/About";
import AuthPage from "../pages/AuthPage";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sobre" element={<About />} />
			<Route path="/auth" element={<AuthPage />} />
		</Routes>
	);
};

export default AppRoutes;
