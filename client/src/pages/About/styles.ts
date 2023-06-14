import styled from "styled-components";

export const About = styled.main`
	min-height: calc(100vh - 64px);
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

		box-shadow: 30px 15px 30px rgba(0, 0, 0, 0.5);

		border-radius: 50% 15%;

		object-fit: cover;
	}

	h2,
	h3 {
		margin-block: 1rem;
		color: #bb2222;
		font-family: "Montserrat Alternates", sans-serif;
	}

	p {
		margin-block: 0.5rem;
		max-width: 90%;

		&:last-child {
			text-align: center;
		}
	}
`;
