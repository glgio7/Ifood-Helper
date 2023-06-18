import axios from "axios";
import { useInterface } from "../../hooks/useInterface";
import { useMarkers } from "../../hooks/useMarkers";
import { IMarker } from "../Marker/types";
import { currentDate } from "../../utils/getCurrentDate";
import { icons } from "../../constants/markersIcons";
import InputContainer from "../InputContainer";

const NewMarkerComponent = () => {
	const { setNewMarker, setMarkers, newMarker } = useMarkers();
	const { setPopup } = useInterface();

	const handleChangeMarker = (prop: string, value: string, label?: string) => {
		setNewMarker((prevState) => {
			return {
				...prevState!,
				[prop]: value,
			};
		});

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

	const handleAddMarker = async (
		e: React.FormEvent<HTMLFormElement>,
		newMarker: IMarker
	) => {
		e.preventDefault();

		if (newMarker.icon.label === "Selecionar") {
			alert("Você precisa selecionar o tipo de alerta!");
			return;
		}

		const url = `${import.meta.env.VITE_APP_API_URL}/markers`;
		try {
			const { data } = await axios.post(url, {
				icon: { iconUrl: newMarker.icon.iconUrl, label: newMarker.icon.label },
				author: "admin",
				comment: newMarker.comment,
				position: { lat: newMarker.position.lat, lng: newMarker.position.lng },
				createdAt: currentDate,
			});

			setMarkers((markers) => {
				return [...markers, data];
			});
			setPopup("");
			setNewMarker(null);
		} catch (error) {
			console.log(error);
			alert("Um erro aconteceu!");
		}
	};

	return (
		<>
			<img className="event-icon" src={newMarker!.icon.iconUrl} />
			<form onSubmit={(e) => handleAddMarker(e, newMarker!)}>
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

				<InputContainer
					id="comment"
					type="text"
					placeholder="Insira um comentário"
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handleChangeMarker("comment", e.target.value);
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
