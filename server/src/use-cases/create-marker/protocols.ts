import { IMarker } from "../../entities/markers/protocols";
import { HttpRequest, HttpResponse } from "../protocols";

export interface ICreateMarkerController {
	handle(httpRequest: HttpRequest<IMarker>): Promise<HttpResponse<IMarker>>;
}

export interface ICreateMarkerRepository {
	createMarker(params: IMarker): Promise<IMarker>;
}
