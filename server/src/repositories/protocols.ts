import { IMarker } from "../entities/marker/protocols";
import { IUser } from "../entities/user/protocols";

export interface IMarkersRepository {
	getMarkers(): Promise<IMarker[]>;
	createMarker(params: IMarker): Promise<IMarker>;
}

export interface IAuthWithEmail {
	email: string;
	password: string;
}

export interface IUserRepository {
	createUser(params: IUser): Promise<IUser>;
	authWithEmail(params: IAuthWithEmail): Promise<Omit<IUser, "password">>;
}
