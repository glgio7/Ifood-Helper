import { IMarker } from "../../entities/marker/protocols";
import { HttpResponse } from "../protocols";
import { IGetMarkersController, IGetMarkersRepository } from "./protocols";

export class GetMarkersController implements IGetMarkersController {
	constructor(private readonly getMarkersRepository: IGetMarkersRepository) {}
	async handle(): Promise<HttpResponse<IMarker[]>> {
		try {
			const markers = await this.getMarkersRepository.getMarkers();

			return {
				statusCode: 200,
				body: markers,
			};
		} catch (error) {
			if (error instanceof Error) {
				return {
					statusCode: 500,
					body: error.message,
				};
			}

			return {
				statusCode: 500,
				body: "Something went wrong...",
			};
		}
	}
}
