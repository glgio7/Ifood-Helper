import { expect, test } from "vitest";
import { User } from "./user";

test("create a new user", () => {
	const newUser = new User({
		email: "user@email.com",
		name: "user",
		username: "username",
		password: "123456",
		score: 1,
		createdAt: "18/06/2023",
	});

	expect(newUser).toBeInstanceOf(User);
});
