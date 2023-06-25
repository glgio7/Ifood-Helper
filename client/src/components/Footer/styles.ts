import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	height: var(--footer-height);

	background-color: #fff;

	z-index: 95;

	position: fixed;
	bottom: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	p {
		color: #dd2222;

		font-size: 0.75rem;
		font-weight: bold;
		text-align: center;
	}
`;
