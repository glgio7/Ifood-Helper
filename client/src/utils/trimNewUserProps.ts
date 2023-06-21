import { INewUser } from "../contexts/AuthContext/types";

export const trimUserProps = (user: INewUser) => {
	for (const prop in user) {
		if (typeof user[prop as keyof INewUser] === "string") {
			user[prop as keyof INewUser] = user[prop as keyof INewUser].trim();
		}
	}
	return user;
};

// const trimmedUser = trimUserProps(newUser);
