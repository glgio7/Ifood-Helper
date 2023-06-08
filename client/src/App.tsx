import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarkersProvider from "./contexts/MarkersContext";
import UIProvider from "./contexts/UIContext";

function App() {
	return (
		<BrowserRouter>
			<UIProvider>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<MarkersProvider>
								<Home />
							</MarkersProvider>
						}
					/>
				</Routes>
				<Footer />
			</UIProvider>
		</BrowserRouter>
	);
}

export default App;
