import styled from "styled-components";

export const Loading = styled.div`
	height: calc(100vh - var(--header-height));

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		position: relative;

		color: #dd2222;

		font-size: 3rem;
		font-weight: bold;
	}

	.loading-icon {
		max-width: 320px;
		aspect-ratio: 1;
	}
`;
