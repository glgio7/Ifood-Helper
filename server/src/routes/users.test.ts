import { describe, expect, it } from "vitest";
import { IUser } from "../entities/user/protocols";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = `http://localhost:${process.env.PORT}`;
let token = "";

describe("Testing users router", () => {
	const validUser = {
		email: "user@email.com",
		name: "user",
		username: "username",
		password: "user",
		score: 1,
	};

	it("Must create a new user", async () => {
		const response = await axios.post(`${baseUrl}/auth/signup`, validUser);

		expect(response.status).toBe(200);
		expect(response.data).toMatchObject<IUser>({} as IUser);
	});

	it("Must signIn with email & password", async () => {
		const { data, status } = await axios.post(`${baseUrl}/auth/signin`, {
			email: validUser.email,
			password: validUser.password,
		});
		token = data.token;

		expect(status).toBe(200);
		expect(data).toMatchObject<IUser>({} as IUser);
	});

	it("Must signIn with token", async () => {
		const { data, status } = await axios.post(`${baseUrl}/auth/token`, {
			token,
		});

		expect(status).toBe(200);
		expect(data).toMatchObject<IUser>({} as IUser);
	});
});
