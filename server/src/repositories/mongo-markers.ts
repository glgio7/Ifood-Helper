import { MongoClientMarkers } from "../database/mongo";
import { IMarker } from "../entities/marker/protocols";
import { IMarkersRepository } from "./protocols";

export class MarkersRepository implements IMarkersRepository {
	async getMarkers(): Promise<IMarker[]> {
		const markers = await MongoClientMarkers.db
			.collection<Omit<IMarker, "">>("markers")
			.find({})
			.toArray();

		return markers.map(({ _id, ...marker }) => ({ ...marker }));
	}

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
