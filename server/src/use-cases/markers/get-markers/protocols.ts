import { IMarker } from "../../../entities/marker/protocols";
import { HttpResponse } from "../../protocols";

export interface IGetMarkersController {
	handle(): Promise<HttpResponse<IMarker[]>>;
}
