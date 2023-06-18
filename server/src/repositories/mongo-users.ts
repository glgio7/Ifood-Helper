import { MongoClientUsers } from "../database/mongo";
import { IUser } from "../entities/user/protocols";
import { ICreateUserRepository } from "../use-cases/users/create-user/protocols";

export class CreateUserRepository implements ICreateUserRepository {
	async createUser(params: IUser): Promise<IUser> {
		const { email, username, createdAt, name, score, password } = params;

		const emailInUse = await MongoClientUsers.db
			.collection("users")
			.findOne({ email });

		const usernameInUse = await MongoClientUsers.db
			.collection("users")
			.findOne({ username });

		if (emailInUse || usernameInUse) {
			throw new Error("O email ou username já está em uso.");
		}

		const { insertedId } = await MongoClientUsers.db
			.collection("users")
			.insertOne({ email, username, createdAt, name, score, password });

		const user = await MongoClientUsers.db
			.collection<Omit<IUser, "id">>("users")
			.findOne({ _id: insertedId });

		if (!user) {
			throw new Error("Um erro interno aconteceu!");
		}

		const { _id, ...rest } = user;

		return { id: _id.toHexString(), ...rest };
	}
}
