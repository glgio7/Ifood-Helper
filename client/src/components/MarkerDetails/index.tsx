import { useMarkers } from "../../hooks/useMarkers";

export const MarkerDetailsComponent = () => {
	const { markerDetails } = useMarkers();

	return (
		<>
			<img className="event-icon" src={markerDetails!.icon.iconUrl} />
			<h6 className="new-alert">{markerDetails!.icon.label}</h6>
			{markerDetails!.icon.iconUrl !== "/icons/current-icon.svg" && (
				<>
					<span>Comentário:</span>
				</>
			)}
			<span>{markerDetails!.comment}</span>
			{markerDetails!.icon.iconUrl !== "/icons/current-icon.svg" && (
				<>
					<h6 className="new-alert">
						Enviado por: {`@${markerDetails!.author}`}
					</h6>
					<span>{`em ${
						markerDetails!.createdAt || "horário indefindo."
					} `}</span>
				</>
			)}
		</>
	);
};
