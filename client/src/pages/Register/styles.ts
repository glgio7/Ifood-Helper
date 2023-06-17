import styled from "styled-components";

export const Register = styled.main`
	min-height: calc(100vh - 100px);
	width: 100%;

	padding: 2rem 1rem;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #fff;

	.title-image {
		width: 240px;
		aspect-ratio: 1;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
	}

	.icon-label {
		color: #dd2222;
	}

	input {
		color: #bb2222;

		&::placeholder {
			color: #bb2222;
			opacity: 0.75;
		}

		&::-moz-placeholder {
			color: #bb2222;
			opacity: 0.75;
		}

		&::-webkit-input-placeholder {
			color: #bb2222;
			opacity: 0.75;
		}
	}

	input:-webkit-autofill {
		-webkit-text-fill-color: #bb2222;
		background-color: transparent;
		transition: background-color 5000s ease-in-out 0s;
	}
	input:-moz-autofill {
		-webkit-text-fill-color: #bb2222;
		background-color: transparent;
		transition: background-color 5000s ease-in-out 0s;
	}

	.auth-btn {
		height: 4rem;
		width: 50%;

		margin-bottom: 1rem;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		border-radius: 4px;

		background-color: #dd2222;
		color: #fff;

		font-weight: bold;
		font-size: 1.05rem;

		transition: all 300ms;

		&:hover {
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 768px) {
		.auth-btn {
			width: 90%;
		}
	}
`;
