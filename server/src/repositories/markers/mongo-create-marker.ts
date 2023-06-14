import { MongoClientMarkers } from "../../database/mongo";
import { IMarker } from "../../entities/marker/protocols";
import { ICreateMarkerRepository } from "../../use-cases/create-marker/protocols";

export class CreateMarkerRepositoy implements ICreateMarkerRepository {
	async createMarker(params: IMarker): Promise<IMarker> {
		const { position, author, comment, icon, createdAt } = params;

		const markerAlreadyExists = await MongoClientMarkers.db
			.collection("markers")
			.findOne({ position: position });

		if (markerAlreadyExists) {
			throw new Error("Marker is already in db.");
		}

		const { insertedId } = await MongoClientMarkers.db
			.collection("markers")
			.insertOne({ position, author, comment, icon, createdAt });

		const createdMarker = await MongoClientMarkers.db
			.collection<Omit<IMarker, "id">>("markers")
			.findOne({ _id: insertedId });

		if (!createdMarker) {
			throw new Error("Marker not created!");
		}

		return createdMarker;
	}
}
