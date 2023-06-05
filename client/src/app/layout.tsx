import Header from "@/components/Header";
import StyledComponentsRegistry from "@/registry";

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
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<Header />
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
