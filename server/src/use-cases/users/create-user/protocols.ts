import { IUser } from "../../../entities/user/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface ICreateUserController {
	handle(
		httpRequest: HttpRequest<Omit<IUser, "createdAt">>
	): Promise<HttpResponse<IUser>>;
}

export interface ICreateUserRepository {
	createUser(params: IUser): Promise<IUser>;
}
