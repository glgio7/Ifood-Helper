import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MarkersProvider from "./contexts/MarkersContext";
import UIProvider from "./contexts/InterfaceContext";
import AppRoutes from "./routes";
import AuthProvider from "./contexts/AuthContext";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<MarkersProvider>
					<UIProvider>
						<Header />
						<AppRoutes />
						<Footer />
					</UIProvider>
				</MarkersProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
