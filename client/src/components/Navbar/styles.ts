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

	.gps-tracking {
		display: none;
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

export const GpsTracking = styled.div<{ active: boolean }>`
	display: none;
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		color: #000;

		order: -1;

		font-weight: normal;

		margin-block: 0.5rem;

		.switcher-btn {
			display: inline-flex;
			align-items: center;
			justify-content: space-around;

			background-color: #ccc;

			border-radius: 20px;

			box-shadow: 0px 0px 5px rgba(0, 0, 0, 1);

			height: 1.5rem;
			width: 3rem;

			position: relative;
		}

		.switcher-btn:after {
			position: absolute;
			content: "";
			background: #dd2222;
			border-radius: 50%;
			top: 0;
			left: ${({ active }) => (active ? "calc(100% - 1.5rem)" : "0")};

			transition: all 400ms;

			height: 100%;

			aspect-ratio: 1;
		}

		.switcher-span {
			color: #dd2222;
			font-weight: bold;
		}
	}
`;
