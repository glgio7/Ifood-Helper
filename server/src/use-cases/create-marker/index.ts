import { Marker } from "../../entities/markers/marker";
import { IMarker } from "../../entities/markers/protocols";
import { HttpRequest, HttpResponse } from "../protocols";
import { ICreateMarkerController, ICreateMarkerRepository } from "./protocols";

export class CreateMarkerController implements ICreateMarkerController {
	constructor(
		private readonly createMarkerRepositoy: ICreateMarkerRepository
	) {}

	async handle(
		httpRequest: HttpRequest<IMarker>
	): Promise<HttpResponse<IMarker>> {
		try {
			const { author, comment, icon, position } = httpRequest.body;

			const newMarker = new Marker({ author, comment, icon, position });

			const marker = await this.createMarkerRepositoy.createMarker(newMarker);

			return {
				statusCode: 200,
				body: marker,
			};
		} catch (error) {
			console.log(error);
			return {
				statusCode: 500,
				body: "Something went wrong!",
			};
		}
	}
}
