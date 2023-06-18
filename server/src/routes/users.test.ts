import { describe, expect, it } from "vitest";
import axios from "axios";
import { IUser } from "../entities/user/protocols";

describe("Testing users router", () => {
	const validUser = {
		email: "user@email.com",
		name: "user",
		username: "username",
		password: "123456",
		score: 1,
	};

	it("Must create a new user", async () => {
		const response = await axios.post("http://localhost:3333/users", validUser);

		expect(response.status).toBe(200);
		expect(response.data).toMatchObject<IUser>({} as IUser);
	});
});
