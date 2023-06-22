import { IMarker } from "../entities/marker/protocols";
import { IUser } from "../entities/user/protocols";
import { IMarkerVotesParams } from "../use-cases/markers/update-marker/protocols";
import {
	IAuthWithEmail,
	IAuthWithToken,
} from "../use-cases/users/auth-user/protocols";

export interface IMarkersRepository {
	deleteMarker(position: { lat: number; lng: number }): Promise<void>;
	updateMarkerVotes(params: IMarkerVotesParams): Promise<IMarker>;
	createMarker(params: IMarker): Promise<IMarker>;
	getMarkers(): Promise<IMarker[]>;
}

export interface IUsersRepository {
	createUser(params: IUser): Promise<IUser>;
	authWithEmail(params: IAuthWithEmail): Promise<Omit<IUser, "password">>;
	authWithToken(params: IAuthWithToken): Promise<Omit<IUser, "password">>;
}

export interface IUpdateOptions {
	$inc: { votes?: number };
	$addToSet?: { upVoters?: string; downVoters?: string };
	$pull?: { upVoters?: string; downVoters?: string };
}
