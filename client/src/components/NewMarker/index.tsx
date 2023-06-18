import { useState } from "react";
import { useInterface } from "../../hooks/useInterface";
import { useMarkers } from "../../hooks/useMarkers";
import { IMarker } from "../Marker/types";
import axios from "axios";
import { currentDate } from "../../utils/getCurrentDate";
import { icons } from "../../constants/markersIcons";

const NewMarkerComponent = () => {
	const { setNewMarker, setMarkers, newMarker } = useMarkers();
	const { setPopup } = useInterface();

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
				setPopup("");
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
		<>
			<img className="event-icon" src={newMarker!.icon.iconUrl} />
			<form
				onSubmit={(e) => {
					e.preventDefault();
					handleAddMarker(newMarker!);
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
	);
};

export default NewMarkerComponent;
