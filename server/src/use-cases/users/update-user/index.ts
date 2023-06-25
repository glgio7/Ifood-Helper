import { IUser } from "../../../entities/user/protocols";
import { IUsersRepository } from "../../../repositories/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";
import { IUpdateScore, IUpdateUserController } from "./protocols";

export class UpdateUserController implements IUpdateUserController {
	constructor(private readonly usersRepository: IUsersRepository) {}

	async updateScore(
		httpRequest: HttpRequest<IUpdateScore>
	): Promise<HttpResponse<IUser>> {
		if (!httpRequest.body) {
			throw new Error("Parametros ausentes.");
		}
		try {
			const { action, owner } = httpRequest.body;
			const updatedUser = await this.usersRepository.updateScore({
				action: action,
				owner: owner,
			});

			return {
				statusCode: 200,
				body: updatedUser,
			};
		} catch (error) {
			console.log(error);

			if (error instanceof Error) {
				return {
					statusCode: 400,
					body: error.message,
				};
			}
			return {
				statusCode: 500,
				body: "error.message",
			};
		}
	}
}
