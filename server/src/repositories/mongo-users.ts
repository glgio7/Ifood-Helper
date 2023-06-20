import { ObjectId } from "mongodb";
import { MongoClientUsers } from "../database/mongo";
import { IUser } from "../entities/user/protocols";
import {
	IAuthWithEmail,
	IAuthWithToken,
} from "../use-cases/users/auth-user/protocols";
import { IUsersRepository } from "./protocols";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UsersRepository implements IUsersRepository {
	async authWithEmail(
		params: IAuthWithEmail
	): Promise<Omit<IUser, "password">> {
		const { email, password } = params;
		const user = await MongoClientUsers.db
			.collection<IUser>("users")
			.findOne({ email });

		const passwordMatch =
			user && (await bcrypt.compare(password, user?.password));

		if (!user || !passwordMatch) {
			throw new Error("Credenciais inválidas.");
		}

		const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
			expiresIn: "5d",
		});

		user.token = token;

		return user;
	}
	async authWithToken(
		params: IAuthWithToken
	): Promise<Omit<IUser, "password">> {
		const { token } = params;

		const decodedToken = jwt.verify(token, process.env.JWT_SECRET!) as {
			userId: string;
		};

		const user = await MongoClientUsers.db
			.collection<IUser>("users")
			.findOne({ _id: new ObjectId(decodedToken.userId) });

		if (!decodedToken || !user) {
			throw new Error("Token is invalid or expired.");
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

		const hashedPassword = await bcrypt.hash(password, 10);

		const { insertedId } = await MongoClientUsers.db
			.collection("users")
			.insertOne({
				email,
				password: hashedPassword,
				username,
				createdAt,
				name,
				score,
			});

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
