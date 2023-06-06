import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalCSS } from "./globalcss.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalCSS />
		<App />
	</React.StrictMode>
);
