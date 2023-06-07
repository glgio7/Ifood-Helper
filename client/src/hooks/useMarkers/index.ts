import { useEffect, useState } from "react";
import { Coords, IMarker } from "../../pages/Index/types";
import { icons } from "../../utils/icons";

export const useMarkers = () => {
	const [markers, setMarkers] = useState<IMarker[]>([]);
	const [currentMarker, setCurrentMarker] = useState<IMarker | null>(null);
	const [newMarker, setNewMarker] = useState<IMarker | null>(null);
	const [newCoords, setNewCoords] = useState<Coords>({} as Coords);

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

	return {
		markers,
		setMarkers,
		currentMarker,
		setCurrentMarker,
		newMarker,
		setNewMarker,
		newCoords,
		setNewCoords,
	};
};
