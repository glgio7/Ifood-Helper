import { createContext, useCallback, useEffect, useState } from "react";
import { IMarker } from "../../components/Marker/types";
import { Coords, IMarkersContext, MarkersProvidersProps } from "./types";
import axios from "axios";

export const MarkersContext = createContext<IMarkersContext>(
	{} as IMarkersContext
);

const MarkersProvider = ({ children }: MarkersProvidersProps) => {
	const [markers, setMarkers] = useState<IMarker[]>([]);
	const [currentLocation, setCurrentLocation] = useState<IMarker | null>(null);

	// Gonna be renamed as markerDetails, setMarkerDetails
	const [currentMarker, setCurrentMarker] = useState<IMarker | null>(null);

	const [newMarker, setNewMarker] = useState<IMarker | null>(null);
	const [coords, setCoords] = useState<Coords>({} as Coords);

	useEffect(() => {
		const url = `${import.meta.env.VITE_APP_API_URL}/markers`;
		axios.get(url).then((response) => {
			const { data } = response;
			setMarkers(data);
		});
	}, []);

	useEffect(() => {
		const updateCurrentLocation = () => {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude;
				const lng = position.coords.longitude;

				const current: IMarker = {
					icon: {
						iconUrl: "/icons/current-icon.svg",
						label: "Localização atual.",
					},
					comment: "Você está aqui.",
					position: { lat, lng },
				};

				setCurrentLocation(current);
			});
		};

		updateCurrentLocation();
	}, []);

	const addMarkerPosition = useCallback(
		async (coords: Coords) => {
			const { lat, lng } = coords;

			if (lat && lng)
				try {
					const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
					const response = await fetch(url);
					const data = await response.json();
					const street = data.display_name.split(",")[0];

					const confirmation = window.confirm(
						`Adicionar marcador em ${street}?`
					);

					return confirmation ? true : false;
				} catch (error) {
					alert("Ocorreu um erro.");
					console.log("Ocorreu um erro:", error);
				}
		},
		[coords]
	);

	const contextValue = {
		markers,
		setMarkers,
		currentLocation,
		currentMarker,
		setCurrentMarker,
		newMarker,
		setNewMarker,
		coords,
		setCoords,
		addMarkerPosition,
	};

	return (
		<MarkersContext.Provider value={contextValue}>
			{children}
		</MarkersContext.Provider>
	);
};

export default MarkersProvider;
