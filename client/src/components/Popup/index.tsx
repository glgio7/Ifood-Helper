import * as S from "./styles";
import { RiCloseFill } from "react-icons/ri";
import { PopupProps } from "./types";
import { icons } from "../../utils/icons";
import { useInterface } from "../../hooks/useInterface";

const Popup = ({
	newMarker,
	currentMarker,
	setNewMarker,
	setMarkers,
}: PopupProps) => {
	const { popup, setPopup } = useInterface();

	const handleChangeMarker = (prop: string, value: string, name?: string) => {
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
						name: name!,
					},
				};
			});
		}
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
			{currentMarker && currentMarker.icon && (
				<>
					<img className="event-icon" src={currentMarker.icon.iconUrl} />
					<h6 className="new-alert">{currentMarker.icon.name}</h6>
					{currentMarker.icon.iconUrl !== "/icons/current-icon.svg" && (
						<>
							<span>Comentário:</span>
						</>
					)}
					<span>{currentMarker.comment}</span>
					{currentMarker.icon.iconUrl !== "/icons/current-icon.svg" && (
						<h6 className="new-alert">Enviado por: {`@admin`}</h6>
					)}
				</>
			)}
			{newMarker && (
				<>
					<img className="event-icon" src={newMarker.icon.iconUrl} />
					<form onSubmit={(e) => e.preventDefault()}>
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
								.filter((icon) => icon.name !== "Localização atual.")
								.map((icon) => (
									<option value={icon.iconUrl} key={icon.iconUrl}>
										{icon.name}
									</option>
								))}
						</select>
						<label htmlFor="comment">Comentário</label>
						<input
							type="text"
							id="comment"
							value={newMarker.comment}
							onChange={(e) => handleChangeMarker("comment", e.target.value)}
						/>
						<button
							type="submit"
							className="submit-btn"
							onClick={() => {
								if (newMarker.icon.name === "Selecionar") {
									alert("Você precisa selecionar o tipo de alerta!");
									return;
								}
								setPopup(!popup);
								setMarkers((markers) => {
									return [...markers, newMarker];
								});
								setNewMarker(null);
							}}
						>
							Confirmar
						</button>
					</form>
				</>
			)}
		</S.CustomPopup>
	);
};

export default Popup;
