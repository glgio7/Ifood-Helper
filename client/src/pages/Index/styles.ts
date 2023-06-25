import styled from "styled-components";

export const Home = styled.main`
	width: 100%;
	height: calc(100vh - (var(--header-height) + var(--footer-height)));

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: relative;


	.leaftlet-container {
		height: 100%;
		width: 100%;
		z-index: 5;
	}
`;
