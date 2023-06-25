import { MongoClientMarkers } from "../database/mongo";
import { IMarker } from "../entities/marker/protocols";
import { IMarkersRepository, IUpdateMarkerVotes } from "./protocols";
import { IMarkerVotesParams } from "../use-cases/markers/update-marker/protocols";
import { UsersRepository } from "./mongo-users";
import { UpdateUserController } from "../use-cases/users/update-user";

export class MarkersRepository implements IMarkersRepository {
	async deleteMarker(position: { lat: number; lng: number }): Promise<void> {
		await MongoClientMarkers.db
			.collection<IMarker>("markers")
			.deleteOne({ position: position });
	}

	async updateMarkerVotes(params: IMarkerVotesParams): Promise<IMarker> {
		const { position, action, author } = params;

		const updateUserRepository = new UsersRepository();
		const updateUserController = new UpdateUserController(updateUserRepository);

		const updateOptions: IUpdateMarkerVotes = {
			$inc: {},
		};

		const marker: IMarker | null = await MongoClientMarkers.db
			.collection<IMarker>("markers")
			.findOne({ position });

		const isUpvoter = marker?.upvoters.includes(author);
		const isDownvoter = marker?.downvoters.includes(author);

		if (!marker) {
			throw new Error("Erro ao encontrar o marcador de alerta.");
		}

		switch (action) {
			case "increase":
				updateOptions.$addToSet = isUpvoter ? {} : { upvoters: author };
				updateOptions.$pull = isDownvoter
					? { downvoters: author }
					: isUpvoter
					? { upvoters: author }
					: {};
				updateOptions.$inc.votes = isUpvoter ? -1 : isDownvoter ? 2 : 1;

				updateUserController.updateScore({
					body: {
						action: isUpvoter ? "decrease" : "increase",
						owner: marker.author,
					},
				});
				break;
			case "decrease":
				updateOptions.$addToSet = isDownvoter ? {} : { downvoters: author };
				updateOptions.$pull = isUpvoter
					? { upvoters: author }
					: isDownvoter
					? { downvoters: author }
					: {};
				updateOptions.$inc.votes = isDownvoter ? 1 : isUpvoter ? -2 : -1;

				updateUserController.updateScore({
					body: {
						action: isDownvoter ? "increase" : "decrease",
						owner: marker.author,
					},
				});
				break;
			default:
				break;
		}

		const updatedMarker = await MongoClientMarkers.db
			.collection<IMarker>("markers")
			.findOneAndUpdate({ position: position }, updateOptions, {
				returnDocument: "after",
			});

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
