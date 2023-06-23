import { RiDislikeFill, RiHeartFill } from "react-icons/ri";
import { useMarkers } from "../../hooks/useMarkers";
import * as S from "../Popup/styles";
import { useAuth } from "../../hooks/useAuth";

export const MarkerDetailsComponent = () => {
	const { markerDetails, rateMarker } = useMarkers();
	const { user } = useAuth();

	if (markerDetails) {
		return (
			<>
				<S.AlertIcon src={markerDetails.icon.iconUrl} />

				<S.Text>{markerDetails.icon.label}</S.Text>

				{markerDetails.icon.label !== "Localização atual." && (
					<>
						<S.Comment>
							<S.Subtitle>Comentário</S.Subtitle>
							<span>{markerDetails.comment}</span>
						</S.Comment>
						<S.Text>Enviado por {`@${markerDetails!.author}`}</S.Text>
						<S.Subtitle>
							{`em ${markerDetails.createdAt || "horário indefindo."} `}
						</S.Subtitle>
						{user && (
							<S.Box>
								<button
									onClick={() =>
										rateMarker({
											position: markerDetails.position,
											action: "increase",
											author: user.username,
										})
									}
								>
									<RiHeartFill
										className={
											markerDetails.upvoters.includes(user!.username)
												? "icon active"
												: "icon"
										}
									/>
									<span>Eu gostei</span>
								</button>
								<button
									onClick={() =>
										rateMarker({
											position: markerDetails.position,
											action: "decrease",
											author: user.username,
										})
									}
								>
									<RiDislikeFill
										className={
											markerDetails.downvoters.includes(user!.username)
												? "icon active"
												: "icon"
										}
									/>
									<span>Não foi útil</span>
								</button>
							</S.Box>
						)}
					</>
				)}
			</>
		);
	}
};
