import { describe, expect, it } from "vitest";
import axios from "axios";
import { IMarker } from "../entities/marker/protocols";

describe("Testando as rotas de markers", () => {
	const validMarker = {
		icon: { iconUrl: "vitestIcon", label: "vitest-testing" },
		author: "vitest",
		comment: "testing-post-route",
		position: { lat: 12345, lng: 54321 },
	};

	it("Must return all markers from db", async () => {
		const response = await axios.get("http://localhost:3333/markers");
		expect(response.status).toBe(200);
		expect(response.data).toEqual(
			expect.arrayContaining<IMarker>([] as IMarker[])
		);
	});
	it("Must post a marker into db", async () => {
		const response = await axios.post(
			"http://localhost:3333/markers",
			validMarker
		);
		expect(response.status).toBe(200);
		expect(response.data).toMatchObject<IMarker>({} as IMarker);
	});
});
