import styled from "styled-components";

export const Loading = styled.div`
	min-height: calc(100vh - var(--header-height));

	background-color: #dd2222;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;

	span {
		font-size: 3rem;
		font-weight: bold;
	}

	p {
		text-align: center;
		max-width: 90%;
	}

	.loading-icon {
		width: 320px;
		aspect-ratio: 1;
	}

	@media screen and (max-width: 768px) {
		.loading-icon {
			max-width: 60%;
		}

		span {
			font-size: 2rem;
		}
	}
`;
