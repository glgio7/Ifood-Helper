import { createContext, useCallback, useEffect, useState } from "react";
import { IMarker } from "../../components/Marker/types";
import { Coords, IMarkersContext, MarkersProvidersProps } from "./types";
import axios from "axios";

export const MarkersContext = createContext<IMarkersContext>(
	{} as IMarkersContext
);

const MarkersProvider = ({ children }: MarkersProvidersProps) => {
	/////// State form Markers from database
	const [markers, setMarkers] = useState<IMarker[]>([]);

	/////// State to tracking and update location in every 3 seconds
	const [gpsTracking, setGpsTracking] = useState<boolean>(false);

	////// Single markers states
	const [currentLocation, setCurrentLocation] = useState<IMarker | null>(null);
	const [markerDetails, setMarkerDetails] = useState<IMarker | null>(null);
	const [newMarker, setNewMarker] = useState<IMarker | null>(null);

	/////// Functions
	const updateCurrentLocation = useCallback(() => {
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
	}, []);

	const addNewMarkerPosition = useCallback(async (coords: Coords) => {
		const { lat, lng } = coords;

		if (lat && lng)
			try {
				const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
				const response = await fetch(url);
				const data = await response.json();
				const street = data.display_name.split(",")[0];

				const confirmation = window.confirm(`Adicionar marcador em ${street}?`);

				return confirmation ? true : false;
			} catch (error) {
				alert("Ocorreu um erro.");
				console.log("Ocorreu um erro:", error);
			}
	}, []);

	/////// useEffects
	useEffect(() => {
		const url = `${import.meta.env.VITE_APP_API_URL}/markers`;
		axios.get(url).then((response) => {
			const { data } = response;
			setMarkers(data);
		});
	}, []);

	useEffect(() => {
		updateCurrentLocation();

		if (gpsTracking) {
			const interval = setInterval(updateCurrentLocation, 3000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [gpsTracking]);

	const contextValue = {
		markers,
		setMarkers,
		currentLocation,
		markerDetails,
		setMarkerDetails,
		newMarker,
		setNewMarker,
		addNewMarkerPosition,
		gpsTracking,
		setGpsTracking,
	};

	return (
		<MarkersContext.Provider value={contextValue}>
			{children}
		</MarkersContext.Provider>
	);
};

export default MarkersProvider;
