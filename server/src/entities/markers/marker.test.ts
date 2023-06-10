import { expect, test } from "vitest";
import { Marker } from "./marker";

test("create a marker", () => {
	const marker = new Marker({
		icon: { iconUrl: "iconurl", label: "some-event" },
		author: "user",
		comment: "event-comment",
		position: { lat: 12345, lng: 54321 },
	});

	expect(marker).toBeInstanceOf(Marker);
});
