import styled from "styled-components";

export const Home = styled.main`
	min-height: calc(100vh - 64px);
	width: 100%;

	position: relative;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: relative;

	.leaftlet-container {
		height: calc(100vh - 64px);
		width: 100%;
		z-index: 9;
	}
`;
