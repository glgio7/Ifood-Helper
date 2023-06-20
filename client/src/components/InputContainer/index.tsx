import * as S from "./styles";
import { InputContainerProps } from "./types";
import { inputIcons } from "../../constants/inputIcons";

const InputContainer = ({
	value,
	type,
	id,
	placeholder,
	onChange,
}: InputContainerProps) => {
	const LabelIcon = inputIcons.find((icon) => icon.id === id)?.icon ?? null;

	return (
		<S.InputContainer>
			{LabelIcon && <LabelIcon className={"icon-label"} />}

			<input
				value={value || ""}
				type={type}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				required
			/>
		</S.InputContainer>
	);
};

export default InputContainer;
