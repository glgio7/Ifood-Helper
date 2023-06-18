import { IUser } from "./protocols";

export class User implements IUser {
	private props: IUser;

	constructor(props: IUser) {
		const requiredFields = [
			"createdAt",
			"score",
			"name",
			"username",
			"email",
			"password",
		];

		for (const field of requiredFields) {
			if (!props[field as keyof IUser] || props[field as keyof IUser] === "") {
				throw new Error(`${field} cannot be empty.`);
			}
		}

		this.props = props;
	}

	get createdAt() {
		return this.props.createdAt;
	}
	get name() {
		return this.props.name;
	}
	get username() {
		return this.props.username;
	}
	get email() {
		return this.props.email;
	}
	get password() {
		return this.props.password;
	}
	get score() {
		return this.props.score;
	}
}
