import * as S from "./styles";
import { RiAwardFill, RiMagicLine, RiStarFill } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { useMarkers } from "../../hooks/useMarkers";

const Profile = () => {
	const { user } = useAuth();
	const { markers } = useMarkers();

	const contributions =
		markers.filter((marker) => marker.upvoters).length +
		markers.filter((marker) => marker.downvoters).length;

	const posts = markers.filter((marker) => marker.author).length;

	return (
		<S.Profile>
			{user && (
				<>
					<img
						src="/icons/current-icon.svg"
						alt="Icone de perfil"
						className="title-image"
					/>
					<h2>Minha conta</h2>
					<h3>Nome de usuário</h3>
					<span>{`@${user.username}`}</span>
					<h3>Score</h3>
					<span>
						{user.score}
						<RiStarFill className="star-icon" />
					</span>
					<h3>Alertas enviados</h3>
					<span>
						{posts}
						<RiAwardFill className="generic-icon" />
					</span>
					<h3>Contribuições</h3>
					<span>
						{contributions}
						<RiMagicLine className="generic-icon" />
					</span>
				</>
			)}
		</S.Profile>
	);
};

export default Profile;
