import { describe, expect, it } from "vitest";
import { IMarker } from "../entities/marker/protocols";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = `http://localhost:${process.env.PORT}`;

describe("Testando as rotas de markers", () => {
	const validMarker = {
		icon: { iconUrl: "vitestIcon", label: "vitest-testing" },
		author: "vitest",
		createdAt: "14/06, 17:00",
		comment: "testing-post-route",
		position: { lat: 12345, lng: 54321 },
	};

	it("Must return all markers from db", async () => {
		const response = await axios.get(`${baseUrl}/markers`);
		expect(response.status).toBe(200);
		expect(response.data).toEqual(
			expect.arrayContaining<IMarker>([] as IMarker[])
		);
	});

	it("Must post a marker into db", async () => {
		const response = await axios.post(`${baseUrl}/markers`, validMarker);
		expect(response.status).toBe(200);
		expect(response.data).toMatchObject<IMarker>({} as IMarker);
	});
	it("Must increase marker's votes", async () => {
		const response = await axios.patch(`${baseUrl}/markers`, {
			position: validMarker.position,
			action: "increase",
			author: validMarker.author,
		});
		expect(response.status).toBe(200);
		expect(response.data).toMatchObject<IMarker>({} as IMarker);
	});

	it("Must decrease marker's votes", async () => {
		const response = await axios.patch(`${baseUrl}/markers`, {
			position: validMarker.position,
			action: "decrease",
			author: validMarker.author,
		});
		expect(response.status).toBe(200);
		expect(response.data).toMatchObject<IMarker>({} as IMarker);
	});
});
