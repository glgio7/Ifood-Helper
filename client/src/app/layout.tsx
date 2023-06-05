import StyledComponentsRegistry from "@/registry";
import { GlobalCSS } from "@/styles/globals";

// This file is like the old _app file

export const metadata = {
	title: "Ifood Helper",
	viewport: { width: "device-width", initialScale: 1 },
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br">
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
