import styled from "styled-components";

export const Loading = styled.div`
	min-height: calc(100vh - var(--header-height));

	background-color: #dd2222;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		color: #fff;

		font-size: 3rem;
		font-weight: bold;
	}

	.loading-icon {
		max-width: 320px;
		aspect-ratio: 1;
	}
`;
