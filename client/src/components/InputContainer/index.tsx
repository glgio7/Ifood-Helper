import * as S from "./styles";
import { InputContainerProps } from "./types";
import { inputIcons } from "../../constants/inputIcons";

const InputContainer = ({ id, type, placeholder }: InputContainerProps) => {
	const LabelIcon = inputIcons.find((icon) => icon.id === id)?.icon ?? null;

	return (
		<S.InputContainer>
			{LabelIcon && <LabelIcon className={"icon-label"} />}

			<input type={type} id={id} placeholder={placeholder} required />
		</S.InputContainer>
	);
};

export default InputContainer;
