import { IMarker } from "../entities/marker/protocols";

export interface IMarkersRepository {
	getMarkers(): Promise<IMarker[]>;
	createMarker(params: IMarker): Promise<IMarker>;
}
