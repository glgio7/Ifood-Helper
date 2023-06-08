import styled from "styled-components";

export const LoadingMarker = styled.div<{
	position: { x: number; y: number } | null;
}>`
	position: absolute;
	left: ${({ position }) => position && `${position.x - 16}px`};
	top: ${({ position }) => position && `${position.y - 80}px`};

	z-index: 9;

	.loader {
		display: flex;
		align-items: center;
	}

	.bar {
		display: inline-block;
		width: 6px;
		height: 12px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 10px;
		animation: scale-up4 1s linear infinite;
	}

	.bar:nth-child(2) {
		height: 24px;
		margin: 0 5px;
		animation-delay: 0.25s;
	}

	.bar:nth-child(3) {
		animation-delay: 0.5s;
	}

	@keyframes scale-up4 {
		20% {
			background-color: #ff0000;
			transform: scaleY(1.5);
		}

		40% {
			transform: scaleY(1);
		}
	}
`;
