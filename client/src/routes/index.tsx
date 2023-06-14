import { Route, Routes } from "react-router-dom";
import Home from "../pages/Index";
import About from "../pages/About";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/sobre" element={<About />} />
		</Routes>
	);
};

export default AppRoutes;
