import { IUser } from "../../../entities/user/protocols";
import { IUsersRepository } from "../../../repositories/protocols";
import { HttpResponse, HttpRequest } from "../../protocols";
import {
	IAuthUserController,
	IAuthWithEmail,
	IAuthWithToken,
} from "./protocols";

export class AuthUserController implements IAuthUserController {
	constructor(private readonly usersRepository: IUsersRepository) {}

	async handleEmail(
		httpRequest: HttpRequest<IAuthWithEmail>
	): Promise<HttpResponse<Omit<IUser, "password">>> {
		try {
			const requiredFields = ["email", "password"];

			for (const field of requiredFields) {
				if (!httpRequest.body?.[field as keyof IAuthWithEmail]) {
					return {
						statusCode: 400,
						body: `Field ${field} is required!`,
					};
				}
			}
			const user = await this.usersRepository.authWithEmail(httpRequest.body!);

			return {
				statusCode: 200,
				body: user,
			};
		} catch (error) {
			return {
				statusCode: 500,
				body: `Internal error, ${error}`,
			};
		}
	}
	async handleToken(
		httpRequest: HttpRequest<IAuthWithToken>
	): Promise<HttpResponse<Omit<IUser, "password">>> {
		try {
			const user = await this.usersRepository.authWithToken(httpRequest.body);

			return {
				statusCode: 200,
				body: user,
			};
		} catch (error) {
			if (error instanceof Error) {
				return {
					statusCode: 500,
					body: error.message,
				};
			}
			return {
				statusCode: 500,
				body: "Tente novamente mais tarde.",
			};
		}
	}
}
