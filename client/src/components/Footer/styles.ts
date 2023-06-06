import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;

	background-color: #fff;

	padding: 0.5rem;

	z-index: 95;

	position: fixed;
	bottom: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	p {
		color: #dd2222;
	}

	@media screen and (max-width: 768px) {
		p {
			font-size: 0.75rem;
		}
	}
`;
