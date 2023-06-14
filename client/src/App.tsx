import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarkersProvider from "./contexts/MarkersContext";
import UIProvider from "./contexts/UIContext";

function App() {
	return (
		<BrowserRouter>
			<MarkersProvider>
				<UIProvider>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
					<Footer />
				</UIProvider>
			</MarkersProvider>
		</BrowserRouter>
	);
}

export default App;
