import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: 64px;

	background-color: #fff;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 1rem;

	.logo-container {
		display: flex;
		align-items: baseline;
		min-width: 40%;
	}

	h1 {
		font-size: 2rem;

		color: #dd2222;
	}

	.logo-icon {
		width: 36px;
		height: 36px;
		aspect-ratio: 1;
	}

	.menu-btn {
		font-size: 2rem;

		cursor: pointer;

		color: #333;
	}
`;
