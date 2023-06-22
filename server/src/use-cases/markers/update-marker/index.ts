import { IMarker } from "../../../entities/marker/protocols";
import { IMarkersRepository } from "../../../repositories/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";
import { IUpdateMarkerController, IMarkerVotesParams } from "./protocols";

export class UpdateMarkerController implements IUpdateMarkerController {
	constructor(private readonly markersRepository: IMarkersRepository) {}
	async updateVotes(
		httpRequest: HttpRequest<IMarkerVotesParams>
	): Promise<HttpResponse<IMarker>> {
		try {
			const { position, action, author } = httpRequest.body;
			const updatedMarker = await this.markersRepository.updateMarkerVotes({
				position,
				action,
				author,
			});

			return {
				statusCode: 200,
				body: updatedMarker,
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
				body: "Internal error",
			};
		}
	}
}
