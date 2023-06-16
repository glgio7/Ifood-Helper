import styled from "styled-components";

export const AuthPage = styled.main`
	min-height: calc(100vh - 64px);
	width: 100%;

	background-color: #fff;

	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		min-height: 50vh;

		padding: 2rem 1rem;

		background-color: #dd2222;
	}

	.title-image {
		width: 240px;
		aspect-ratio: 1;

		border-radius: 0% 50%;

		box-shadow: -30px -10px 15px rgba(150, 0, 0, 0.5);

		object-fit: cover;
	}

	h2 {
		margin-block: 1rem;
		color: #fff;
	}

	.auth-container {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;

		padding: 2rem 1rem;
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

	.login {
		background-color: #fff;
		color: #dd2222;

		border: #dd2222 3px solid;
	}

	@media screen and (max-width: 768px) {
		.auth-btn {
			width: 90%;
		}
	}
`;
