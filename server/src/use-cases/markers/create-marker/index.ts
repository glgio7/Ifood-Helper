import { Marker } from "../../../entities/marker/marker";
import { IMarker } from "../../../entities/marker/protocols";
import { IMarkersRepository } from "../../../repositories/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";
import { ICreateMarkerController } from "./protocols";

export class CreateMarkerController implements ICreateMarkerController {
	constructor(private readonly markerRepositoy: IMarkersRepository) {}

	async handle(
		httpRequest: HttpRequest<IMarker>
	): Promise<HttpResponse<IMarker>> {
		try {
			const { author, comment, icon, position, createdAt } = httpRequest.body;

			const newMarker = new Marker({
				author,
				comment,
				icon,
				position,
				createdAt,
				votes: 0,
				upvoters: [],
				downvoters: [],
			});

			const marker = await this.markerRepositoy.createMarker(newMarker);

			return {
				statusCode: 200,
				body: marker,
			};
		} catch (error) {
			if (error instanceof Error) {
				return {
					statusCode: 400,
					body: error.message,
				};
			}

			return {
				statusCode: 500,
				body: "Something went wrong!",
			};
		}
	}
}
