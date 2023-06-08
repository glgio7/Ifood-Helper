import styled from "styled-components";

export const Navbar = styled.nav<{ active: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;

	position: relative;

	width: 100%;

	color: #dd2222;

	.nav-links {
		display: inline-flex;
	}

	a {
		margin-inline: 1.5rem;

		font-weight: 500;

		transition: all 250ms;

		&:hover {
			opacity: 0.8;
		}
	}

	.auth-btn {
		height: 2rem;
		width: 6rem;

		color: #fff;
		background-color: #dd2222;

		font-weight: bold;

		border-radius: 4px;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;

		opacity: ${({ active }) => (active ? "1" : "0")};
		pointer-events: ${({ active }) => (active ? "all" : "none")};

		font-weight: bold;

		padding: 1rem;

		width: 75vw;
		height: calc(100vh - var(--header-height));
		background-color: #fff;
		box-shadow: -3px 10px 10px rgba(0, 0, 0, 0.5);

		position: fixed;
		top: var(--header-height);
		right: 0;

		z-index: 99;

		transition: all 300ms;

		.nav-links {
			height: 90%;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
		}
		a {
			font-weight: 600;
		}

		.auth-btn {
			order: -1;
			width: 90%;
			height: 3rem;
		}
	}
`;
