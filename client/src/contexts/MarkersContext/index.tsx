import { createContext, useCallback, useEffect, useState } from "react";
import { IMarker, IMinimalMarker } from "../../components/Marker/types";
import {
	Coords,
	IMarkersContext,
	MarkersProvidersProps,
	RateMarkerProps,
} from "./types";
import axios from "axios";
import { currentDate } from "../../utils/getCurrentDate";

export const MarkersContext = createContext<IMarkersContext>(
	{} as IMarkersContext
);

const MarkersProvider = ({ children }: MarkersProvidersProps) => {
	/////// State for Markers from database
	const [markers, setMarkers] = useState<IMarker[]>([]);

	/////// State to tracking and update location in every 3 seconds
	const [gpsTracking, setGpsTracking] = useState<boolean>(false);

	////// Single markers states
	const [currentLocation, setCurrentLocation] = useState<IMinimalMarker | null>(
		null
	);
	const [markerDetails, setMarkerDetails] = useState<IMarker | null>(null);
	const [newMarker, setNewMarker] = useState<IMinimalMarker | null>(null);

	/////// Functions
	const updateCurrentLocation = useCallback(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;

			const current: IMinimalMarker = {
				icon: {
					iconUrl: "/icons/current-icon.svg",
					label: "Localização atual.",
				},
				comment: "Você está aqui.",
				position: { lat, lng },
				author: "admin",
				createdAt: currentDate,
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

	const rateMarker = useCallback(
		async ({ position, action, author }: RateMarkerProps) => {
			const url = `${import.meta.env.VITE_APP_API_URL}/markers`;
			try {
				const response: IMarker = await axios
					.patch(url, { position, action, author })
					.then((res) => {
						return res.data;
					});

				setMarkerDetails(response);
			} catch (error) {
				if (error instanceof Error) {
					alert(error.message);
				}
				console.log(error);
			}
		},
		[]
	);

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

		const stringGps = localStorage.getItem("gpstracking");
		const gpsPrefs: boolean = stringGps && JSON.parse(stringGps);


		if(!gpsTracking){
			localStorage.removeItem("gpstracking")
		}

		if (gpsTracking || gpsPrefs) {
			localStorage.setItem("gpstracking", JSON.stringify(true));
			setGpsTracking(gpsPrefs);

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
		rateMarker,
	};

	return (
		<MarkersContext.Provider value={contextValue}>
			{children}
		</MarkersContext.Provider>
	);
};

export default MarkersProvider;
