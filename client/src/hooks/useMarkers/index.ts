import { useCallback, useEffect, useState } from "react";
import { icons } from "../../utils/icons";
import { Coords, IMarker } from "./types";

export const useMarkers = () => {
	const [markers, setMarkers] = useState<IMarker[]>([]);
	const [currentMarker, setCurrentMarker] = useState<IMarker | null>(null);
	const [newMarker, setNewMarker] = useState<IMarker | null>(null);
	const [coords, setCoords] = useState<Coords>({} as Coords);

	useEffect(() => {
		const currentIcon = icons.find(
			(item) => item.iconUrl === "/icons/current-icon.svg"
		);

		const updateCurrentLocation = () => {
			navigator.geolocation.getCurrentPosition((position) => {
				const lat = position.coords.latitude;
				const lng = position.coords.longitude;

				const newMarker = {
					icon: currentIcon!,
					comment: "Você está aqui.",
					position: { lat, lng },
				};

				setMarkers((prevMarkers) => {
					const currentLocationIndex = prevMarkers.findIndex(
						(marker) => marker.comment === "Você está aqui."
					);
					if (currentLocationIndex !== -1) {
						const updatedMarkers = [...prevMarkers];

						updatedMarkers[currentLocationIndex] = {
							...prevMarkers[currentLocationIndex],
							position: { lat, lng },
						};
						return updatedMarkers;
					} else {
						return [newMarker];
					}
				});
			});
		};

		updateCurrentLocation();
		// setInterval(updateCurrentLocation, 10000);
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

	return {
		addMarkerPosition,
		markers,
		setMarkers,
		currentMarker,
		setCurrentMarker,
		newMarker,
		setNewMarker,
		coords,
		setCoords,
	};
};
