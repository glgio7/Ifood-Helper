import styled from "styled-components";

export const Profile = styled.main`
width: 100%;
min-height: calc(100vh - (var(--header-height) + var(--footer-height)));

	padding: 2rem 1rem;


	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: #fff;

	.title-image {
		width: 240px;
		aspect-ratio: 1;

		text-shadow: 30px 15px 30px rgba(0, 0, 0, 0.5);

		object-fit: cover;
	}

	h2,
	h3 {
		margin-block: .5rem;
		font-family: "Montserrat", sans-serif;
	}
	h2{color: #bb2222;}

	span{
		display: inline-flex;
		align-items: center;
	}

	.star-icon{
		color: #f4b000;
	}
	.generic-icon{
		color: #bb2222;
	}

`;
