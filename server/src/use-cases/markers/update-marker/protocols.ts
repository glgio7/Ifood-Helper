import { IMarker } from "../../../entities/marker/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface IMarkerVotesParams {
	position: { lat: number; lng: number };
	action: string;
	author: string;
}

export interface IUpdateMarkerController {
	updateVotes(
		httpRequest: HttpRequest<IMarkerVotesParams>
	): Promise<HttpResponse<IMarker>>;
}
