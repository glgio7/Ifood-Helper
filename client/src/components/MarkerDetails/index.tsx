import { RiDislikeFill, RiHeartFill } from "react-icons/ri";
import { useMarkers } from "../../hooks/useMarkers";
import * as S from "../Popup/styles";

export const MarkerDetailsComponent = () => {
	const { markerDetails } = useMarkers();
	if (markerDetails) {
		return (
			<>
				<S.AlertIcon src={markerDetails.icon.iconUrl} />

				<S.Text>{markerDetails.icon.label}</S.Text>

				{markerDetails!.icon.label !== "Localização atual." && (
					<>
						<S.Comment>
							<S.Subtitle>Comentário</S.Subtitle>
							<span>{markerDetails.comment}</span>
						</S.Comment>
						<S.Text>Enviado por {`@${markerDetails!.author}`}</S.Text>
						<S.Subtitle>
							{`em ${markerDetails!.createdAt || "horário indefindo."} `}
						</S.Subtitle>
						<S.Box>
							<button>
								<RiHeartFill className={"icon"} />
								<span>Eu gostei</span>
							</button>
							<button>
								<RiDislikeFill className={"icon"} />
								<span>Não foi útil</span>
							</button>
						</S.Box>
					</>
				)}
			</>
		);
	}
};
