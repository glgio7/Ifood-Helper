import { IMarker } from "../entities/marker/protocols";
import { IUser } from "../entities/user/protocols";
import {
	IAuthWithEmail,
	IAuthWithToken,
} from "../use-cases/users/auth-user/protocols";

export interface IMarkersRepository {
	getMarkers(): Promise<IMarker[]>;
	createMarker(params: IMarker): Promise<IMarker>;
}

export interface IUsersRepository {
	createUser(params: IUser): Promise<IUser>;
	authWithEmail(params: IAuthWithEmail): Promise<Omit<IUser, "password">>;
	authWithToken(params: IAuthWithToken): Promise<Omit<IUser, "password">>;
}
