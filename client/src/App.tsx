import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarkersProvider from "./contexts/MarkersContext";
import UIProvider from "./contexts/UIContext";
import AppRoutes from "./routes";

function App() {
	return (
		<BrowserRouter>
			<MarkersProvider>
				<UIProvider>
					<Header />
					<AppRoutes />
					<Footer />
				</UIProvider>
			</MarkersProvider>
		</BrowserRouter>
	);
}

export default App;
