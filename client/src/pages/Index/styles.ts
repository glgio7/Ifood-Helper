import styled from "styled-components";

export const Home = styled.main`
	min-height: calc(100vh - 64px);
	width: 100%;

	/* background-image: url("/images/example-map.png"); */
	background-size: cover;
	background-repeat: no-repeat;

	.leaftlet-container {
		height: calc(100vh - 64px);
		width: 100%;
		z-index: 90;
	}
`;
