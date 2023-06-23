import { ObjectId } from "mongodb";
import { MongoClientMarkers } from "../database/mongo";
import { IMarker } from "../entities/marker/protocols";
import { IMarkersRepository, IUpdateOptions } from "./protocols";
import { IMarkerVotesParams } from "../use-cases/markers/update-marker/protocols";

export class MarkersRepository implements IMarkersRepository {
	async deleteMarker(position: { lat: number; lng: number }): Promise<void> {
		await MongoClientMarkers.db
			.collection<IMarker>("markers")
			.deleteOne({ position: position });
	}

	async updateMarkerVotes(params: IMarkerVotesParams): Promise<IMarker> {
		const { position, action, author } = params;

		const updateOptions: IUpdateOptions = {
			$inc: {},
		};

		const marker: IMarker | null = await MongoClientMarkers.db
			.collection<IMarker>("markers")
			.findOne({ position });

		const isUpvoter = marker?.upvoters.includes(author);
		const isDownvoter = marker?.downvoters.includes(author);

		if (action === "increase") {
			if (isUpvoter) {
				updateOptions.$inc.votes = -1;
				updateOptions.$pull = { upvoters: author };
			} else if (!isUpvoter) {
				updateOptions.$inc.votes = 1;
				updateOptions.$addToSet = { upvoters: author };
			}
		}
		if (action === "decrease") {
			if (isDownvoter) {
				updateOptions.$inc.votes = 1;
				updateOptions.$pull = { downvoters: author };
			} else if (!isDownvoter) {
				updateOptions.$inc.votes = -1;
				updateOptions.$addToSet = { downvoters: author };
			}
		}

		const updatedMarker = await MongoClientMarkers.db
			.collection<IMarker>("markers")
			.findOneAndUpdate({ position: position }, updateOptions);

		if (!updatedMarker.value) {
			throw new Error("Erro ao receber o feedback");
		}

		return updatedMarker.value;
	}

	async createMarker(params: IMarker): Promise<IMarker> {
		const {
			position,
			author,
			comment,
			icon,
			createdAt,
			votes,
			upvoters,
			downvoters,
		} = params;

		const markerAlreadyExists = await MongoClientMarkers.db
			.collection("markers")
			.findOne({ position: position });

		if (markerAlreadyExists) {
			throw new Error("Marker is already in db.");
		}

		const { insertedId } = await MongoClientMarkers.db
			.collection<IMarker>("markers")
			.insertOne({
				position,
				author,
				comment,
				icon,
				createdAt,
				votes,
				downvoters,
				upvoters,
			});

		const createdMarker = await MongoClientMarkers.db
			.collection<Omit<IMarker, "id">>("markers")
			.findOne({ _id: insertedId });

		if (!createdMarker) {
			throw new Error("Marker not created!");
		}

		return createdMarker;
	}

	async getMarkers(): Promise<IMarker[]> {
		const markers = await MongoClientMarkers.db
			.collection<IMarker>("markers")
			.find({})
			.toArray();

		for (const marker of markers) {
			if (marker.votes <= -3) {
				await this.deleteMarker(marker.position);
			}
		}

		const availableMarkers = markers.filter((marker) => marker.votes > -3);

		return availableMarkers.map(({ _id, ...marker }) => ({ ...marker }));
	}
}
