import { IconType } from "react-icons";
import { RiLockPasswordLine, RiMailLine, RiUser3Line } from "react-icons/ri";

interface InputIcon {
	id: string;
	icon: IconType;
}

export const inputIcons: InputIcon[] = [
	{
		id: "email",
		icon: RiMailLine,
	},
	{
		id: "password",
		icon: RiLockPasswordLine,
	},
	{
		id: "password-confirmation",
		icon: RiLockPasswordLine,
	},
	{
		id: "name",
		icon: RiUser3Line,
	},
	{
		id: "username",
		icon: RiUser3Line,
	},
];
