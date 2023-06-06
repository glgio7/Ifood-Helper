import styled from "styled-components";

export const Navbar = styled.nav<{ active: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 75%;

	color: #dd2222;

	.nav-links {
		display: flex;
	}

	a {
		margin-inline: 2rem;

		transition: all 250ms;

		&:hover {
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;

		opacity: ${({ active }) => (active ? "1" : "0")};
		pointer-events: ${({ active }) => (active ? "all" : "none")};

		font-weight: bold;

		padding: 1rem;

		transition: all 300ms;

		.nav-links {
			height: 100%;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
		}

		width: 60vw;
		height: 100vh;
		background-color: #fff;
		box-shadow: -3px 0px 10px rgba(0, 0, 0, 0.5);

		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;

		z-index: 99;

		.menu-btn {
			order: -1;
		}
	}
`;
