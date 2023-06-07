import styled from "styled-components";

export const Navbar = styled.nav<{ active: boolean }>`
	display: flex;
	align-items: center;

	width: 50%;

	color: #dd2222;

	.nav-links {
		display: inline-flex;
	}

	a {
		margin-inline: 1.5rem;

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

		width: 50vw;
		height: calc(100vh - var(--header-height));
		background-color: #fff;
		box-shadow: -3px 10px 10px rgba(0, 0, 0, 0.5);

		position: fixed;
		top: var(--header-height);
		right: 0;

		z-index: 99;

		transition: all 300ms;

		.nav-links {
			height: 100%;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
		}

		.menu-btn {
			order: -1;
		}
	}
`;
