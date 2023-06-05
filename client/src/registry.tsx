"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { GoogleFonts } from "next-google-fonts";
import { GlobalCSS } from "./styles/globals";

export default function StyledComponentsRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	// Only create stylesheet once with lazy initial state
	// x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
	const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = styledComponentsStyleSheet.getStyleElement();
		styledComponentsStyleSheet.instance.clearTag();
		return <>{styles}</>;
	});

	if (typeof window !== "undefined") return <>{children}</>;

	return (
		<StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
			<GlobalCSS />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" />
			{children}
		</StyleSheetManager>
	);
}
