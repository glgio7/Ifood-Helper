import styled from "styled-components";

export const CustomPopup = styled.div<{ active: string }>`
	position: absolute;
	z-index: 10;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

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

	@media screen and (max-width: 768px) {
		z-index: 99;

		width: 100%;
		height: 100%;

		border-radius: 0;

		select,
		.submit-btn {
			width: 90%;
		}
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

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
		select {
			width: 90%;
		}
	}
`;

export const Box = styled.div`
	min-height: 40px;
	width: 60%;

	display: flex;
	align-items: center;
	justify-content: space-evenly;

	margin-block: 0.5rem;
	text-align: center;

	button {
		background-color: transparent;
	}

	.icon {
		color: #fff;

		width: 36px;
		height: 36px;

		padding: 0.5rem;

		border-radius: 4px;
		border: 1px solid rgba(255, 255, 255, 0.5);
	}

	span {
		display: block;
		color: #fff;

		font-size: 0.75rem;
		font-weight: bold;
		margin-block: 3px;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const Text = styled.h5`
	background-color: #eee;

	border-radius: 4px;

	min-height: 40px;
	width: 60%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	font-weight: bold;
	font-size: 1rem;

	margin-block: 0.5rem;

	color: #bb2222;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const Subtitle = styled.h6`
	color: #fff;
	text-align: center;
	font-size: 0.85rem;

	margin-block: 0.5rem;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const Comment = styled.div`
	flex-direction: column;
	display: flex;
	align-items: center;

	padding: 0.5rem;

	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 4px;

	width: 60%;

	span {
		margin-block: 0.5rem;
		color: #fff;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export const AlertIcon = styled.img`
	width: 128px;
	aspect-ratio: 1;
`;

export const Button = styled.button`
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

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
