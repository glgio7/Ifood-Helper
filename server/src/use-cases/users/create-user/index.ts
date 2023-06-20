import { IUser } from "../../../entities/user/protocols";
import { User } from "../../../entities/user/user";
import { IUsersRepository } from "../../../repositories/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";
import { ICreateUserController } from "./protocols";

export class CreateUserController implements ICreateUserController {
	constructor(private readonly usersRepository: IUsersRepository) {}

	async handle(
		httpRequest: HttpRequest<Omit<IUser, "createdAt">>
	): Promise<HttpResponse<IUser>> {
		try {
			const currentDate = new Date().toLocaleDateString();

			const { email, password, username, score, name } = httpRequest.body;
			const newUser = new User({
				email,
				password,
				username,
				score,
				name,
				createdAt: currentDate,
			});
			const user = await this.usersRepository.createUser(newUser);

			return {
				statusCode: 200,
				body: user,
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
				body: "Something went wrong!",
			};
		}
	}
}
