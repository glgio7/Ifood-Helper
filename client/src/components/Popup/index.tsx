import * as S from "./styles";
import axios from "axios";
import { RiCloseFill } from "react-icons/ri";
import { icons } from "../../constants/icons";
import { useMarkers } from "../../hooks/useMarkers";
import { useInterface } from "../../hooks/useInterface";
import { IMarker } from "../Marker/types";
import { useState } from "react";
import { currentDate } from "../../utils/getCurrentDate";

const Popup = () => {
	const { setNewMarker, markerDetails, setMarkers, newMarker } = useMarkers();

	const { popup, setPopup } = useInterface();

	const [comment, setComment] = useState<string>("");

	const handleChangeMarker = (prop: string, value: string, label?: string) => {
		if (value) {
			setNewMarker((prevState) => {
				return {
					...prevState!,
					[prop]: value,
				};
			});
		}

		if (prop === "icon") {
			setNewMarker((prevState) => {
				return {
					...prevState!,
					icon: {
						iconUrl: value,
						label: label!,
					},
				};
			});
		}
	};

	const handleAddMarker = (newMarker: IMarker) => {
		const url = `${import.meta.env.VITE_APP_API_URL}/markers`;

		if (newMarker.icon.label === "Selecionar") {
			alert("Você precisa selecionar o tipo de alerta!");
			return;
		}

		axios
			.post(url, {
				icon: { iconUrl: newMarker.icon.iconUrl, label: newMarker.icon.label },
				author: "admin",
				comment: comment,
				position: { lat: newMarker.position.lat, lng: newMarker.position.lng },
				createdAt: currentDate,
			})
			.then((response) => {
				const { comment, icon, position, createdAt, author }: IMarker =
					response.data;
				setPopup(!popup);
				setMarkers((markers) => {
					return [...markers, { comment, icon, position, createdAt, author }];
				});
				setNewMarker(null);
			})
			.catch((error) => {
				console.log(error);
				alert("Um erro aconteceu!");
			});
	};

	return (
		<S.CustomPopup active={popup}>
			<RiCloseFill
				className="close-btn"
				onClick={() => {
					setNewMarker(null);
					setPopup(!popup);
				}}
			/>
			{markerDetails && (
				<>
					<img className="event-icon" src={markerDetails.icon.iconUrl} />
					<h6 className="new-alert">{markerDetails.icon.label}</h6>
					{markerDetails.icon.iconUrl !== "/icons/current-icon.svg" && (
						<>
							<span>Comentário:</span>
						</>
					)}
					<span>{markerDetails.comment}</span>
					{markerDetails.icon.iconUrl !== "/icons/current-icon.svg" && (
						<>
							<h6 className="new-alert">
								Enviado por: {`@${markerDetails.author}`}
							</h6>
							<span>{`em ${
								markerDetails.createdAt || "horário indefindo."
							} `}</span>
						</>
					)}
				</>
			)}
			{newMarker && (
				<>
					<img className="event-icon" src={newMarker.icon.iconUrl} />
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleAddMarker(newMarker);
						}}
					>
						<h6 className="new-alert">Adicionar novo alerta</h6>
						<label htmlFor="alert">Tipo</label>
						<select
							name=""
							id="alert"
							required
							onChange={(e) => {
								handleChangeMarker(
									"icon",
									e.target.value,
									e.target.selectedOptions[0].label
								);
							}}
						>
							{icons
								.filter((icon) => icon.label !== "Localização atual.")
								.map((icon) => (
									<option value={icon.iconUrl} key={icon.iconUrl}>
										{icon.label}
									</option>
								))}
						</select>
						<label htmlFor="comment">Comentário</label>
						<input
							type="text"
							id="comment"
							value={comment}
							required
							onChange={(e) => {
								setComment(e.target.value);
								handleChangeMarker("comment", comment);
							}}
						/>
						<button type="submit" className="submit-btn">
							Confirmar
						</button>
					</form>
				</>
			)}
		</S.CustomPopup>
	);
};

export default Popup;
