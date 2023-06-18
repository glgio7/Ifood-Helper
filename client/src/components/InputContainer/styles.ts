import styled from "styled-components";

export const InputContainer = styled.div`
	width: 60%;

	display: flex;
	align-items: center;

	border: 1px solid #fff;

	padding: 0 9px;
	margin-block: 12px;

	height: 40px;

	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);

	border-radius: 4px;

	.icon-label {
		font-weight: bold;
		font-size: 1.5rem;

		width: 1.5rem;
		height: 1.5rem;

		color: #fff;
	}

	input {
		width: calc(100% - 1.5rem);
		height: 100%;

		background-color: transparent;

		padding: 0 9px;

		font-size: 1rem;

		color: #fff;

		outline: none;

		caret-color: #fff;

		&::placeholder {
			color: #fff;
		}

		&::-moz-placeholder {
			color: #fff;
		}

		&::-webkit-input-placeholder {
			color: #fff;
		}
	}

	input:-webkit-autofill {
		-webkit-text-fill-color: #fff;
		background-color: transparent;
		transition: background-color 5000s ease-in-out 0s;
	}
	input:-moz-autofill {
		-webkit-text-fill-color: #fff;
		background-color: transparent;
		transition: background-color 5000s ease-in-out 0s;
	}

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
