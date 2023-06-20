export type InputContainerProps = {
	value: string;
	type: string;
	id: string;
	placeholder: string;
	onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};
