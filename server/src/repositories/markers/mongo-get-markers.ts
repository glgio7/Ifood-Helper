import { MongoClientMarkers } from "../../database/mongo";
import { IMarker } from "../../entities/marker/protocols";
import { IGetMarkersRepository } from "../../use-cases/get-markers/protocols";

export class GetMarkersRepositoy implements IGetMarkersRepository {
	async getMarkers(): Promise<IMarker[]> {
		const markers = await MongoClientMarkers.db
			.collection<Omit<IMarker, "">>("markers")
			.find({})
			.toArray();

		return markers.map(({ _id, ...marker }) => ({ ...marker }));
	}
}
