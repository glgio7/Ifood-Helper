import styled from "styled-components";

export const Login = styled.main`
	min-height: calc(100vh - 100px);
	width: 100%;

	padding: 2rem 1rem;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #dd2222;

	.title-image {
		width: 240px;
		aspect-ratio: 1;

		margin-bottom: 2rem;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
	}

	.auth-btn {
		height: 4rem;
		width: 60%;

		margin-bottom: 1rem;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		border-radius: 4px;

		color: #dd2222;
		background-color: #fff;

		font-weight: bold;
		font-size: 1.05rem;

		transition: all 300ms;

		&:hover {
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 768px) {
		.keep-signedin {
			width: calc(100% - 1.5rem);
			margin-left: 9px;
		}

		.auth-btn {
			width: 90%;
		}
	}
`;
