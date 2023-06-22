import { IMarker } from "../../../entities/marker/protocols";
import { HttpRequest, HttpResponse } from "../../protocols";

export interface ICreateMarkerController {
	handle(httpRequest: HttpRequest<Omit<IMarker, "votes">>): Promise<HttpResponse<IMarker>>;
}
