import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: var(--header-height);

	background-color: #fff;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 1rem;

	z-index: 99;

	h1 {
		min-width: 35%;
		font-family: "Montserrat Alternates", sans-serif;

		cursor: pointer;

		display: inline-flex;
		align-items: center;

		font-size: 2rem;
		font-weight: bold;

		color: #dd2222;
	}

	.logo-icon {
		width: 36px;
		padding: 3px;
		aspect-ratio: 1;
	}
	.menu-btn {
		display: none;
	}

	@media screen and (max-width: 768px) {
		position: sticky;
		top: 0;

		h1 {
			justify-content: center;
			width: 100%;
			font-size: 1.75rem;
		}

		.menu-btn {
			position: absolute;
			right: 1rem;

			display: block;

			cursor: pointer;

			color: #333;

			font-size: 1.75rem;
		}
	}
`;
