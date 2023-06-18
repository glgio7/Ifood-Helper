import styled from "styled-components";

export const CustomPopup = styled.div<{ active: string }>`
	position: absolute;
	z-index: 10;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	opacity: ${({ active }) => (active ? "1" : "0")};
	pointer-events: ${({ active }) => (active ? "all" : "none")};

	width: 40%;

	padding: 1rem;

	border-radius: 10px;

	background-color: #bb2222;

	transition: all 350ms;

	.close-btn {
		position: absolute;
		right: 1rem;
		top: 1rem;

		cursor: pointer;

		color: #fff;

		font-size: 2rem;
		font-weight: bold;
	}

	.event-icon {
		width: 128px;
		aspect-ratio: 1;
	}

	span,
	label,
	input,
	select {
		color: #fff;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	span {
		text-align: center;
	}

	label,
	span,
	.submit-btn,
	.new-alert {
		margin-block: 1rem;
	}

	.submit-btn,
	.new-alert {
		color: #bb2222;
		background-color: #eee;

		border-radius: 4px;

		min-height: 40px;
		width: 60%;

		font-size: 1rem;
		font-weight: bold;

		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
	select {
		background-color: #333;

		min-height: 40px;
		width: 60%;

		padding: 9px;

		border-radius: 4px;

		outline: none;
		border: none;

		box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 6px;

		&:focus {
			outline: #ff0000 1px solid;
			caret-color: #ff0000;
		}
	}

	@media screen and (max-width: 768px) {
		z-index: 99;

		width: 100%;
		height: 100%;

		border-radius: 0;

		select,
		.new-alert,
		.submit-btn {
			width: 90%;
		}
	}
`;
