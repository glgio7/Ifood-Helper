import { IUser } from "../../../entities/user/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface IUpdateScore {
	action: string;
	owner: string;
}

export interface IUpdateUserController {
	updateScore(httpRequest: HttpRequest<IUpdateScore>): Promise<HttpResponse<IUser>>;
}
