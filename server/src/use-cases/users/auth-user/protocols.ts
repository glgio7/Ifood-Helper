import { IUser } from "../../../entities/user/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface IAuthWithEmail {
	email: string;
	password: string;
}

export interface IAuthWithEmail {
	email: string;
	password: string;
}

export interface IAuthWithToken {
	token: string;
}

export interface IAuthUserController {
	handleEmail(
		httpRequest: HttpRequest<IAuthWithEmail>
	): Promise<HttpResponse<Omit<IUser, "password">>>;
	handleToken(
		httpRequest: HttpRequest<IAuthWithToken>
	): Promise<HttpResponse<Omit<IUser, "password">>>;
}
