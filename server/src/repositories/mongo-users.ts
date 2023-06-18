import { MongoClientUsers } from "../database/mongo";
import { IUser } from "../entities/user/protocols";
import { IAuthWithEmail, IUserRepository } from "./protocols";

export class UserRepository implements IUserRepository {
	async authWithEmail(
		params: IAuthWithEmail
	): Promise<Omit<IUser, "password">> {
		const { email, password } = params;
		const user = await MongoClientUsers.db
			.collection<IUser>("users")
			.findOne({ email });

		if (!user || user.password !== password) {
			throw new Error("Credenciais inválidas.");
		}

		return user;
	}

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
