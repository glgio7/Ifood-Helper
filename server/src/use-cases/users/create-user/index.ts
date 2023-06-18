import { IUser } from "../../../entities/user/protocols";
import { User } from "../../../entities/user/user";
import { HttpRequest, HttpResponse } from "../../protocols";
import { ICreateUserController, ICreateUserRepository } from "./protocols";

export class CreateUserController implements ICreateUserController {
	constructor(private readonly createUserRepository: ICreateUserRepository) {}

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
			const user = await this.createUserRepository.createUser(newUser);

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
