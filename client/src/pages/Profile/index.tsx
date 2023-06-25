import * as S from "./styles";
import {
	RiAwardFill,
	RiMagicLine,
	RiStarFill,
	RiDislikeFill,
	RiHeartFill,
} from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";
import { useMarkers } from "../../hooks/useMarkers";

const Profile = () => {
	const { user } = useAuth();
	const { markers } = useMarkers();

	const contributions =
		markers.filter((marker) => marker.upvoters.includes(user!.username))
			.length +
		markers.filter((marker) => marker.downvoters.includes(user!.username))
			.length;

	const userPosts = markers.filter(
		(marker) => marker.author === user!.username
	);

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
					<span>{`@${user.username}`}</span>
					<h3>Membro desde:</h3>
					<span>{user.createdAt}</span>
					<h3>Score</h3>
					<span>
						{user.score}
						<RiStarFill className="star-icon" />
					</span>
					<h3>Alertas enviados</h3>
					<span>
						{userPosts.length}
						<RiAwardFill className="generic-icon" />
					</span>
					<h3>Contribuições</h3>
					<span>
						{contributions}
						<RiMagicLine className="generic-icon" />
					</span>
					<h3>Likes recebidos</h3>
					<span>
						{
							userPosts.filter((post) => post.upvoters.includes(user!.username))
								.length
						}
						<RiHeartFill className="generic-icon" />
					</span>
					<h3>Disikes recebidos</h3>
					<span>
						{
							userPosts.filter((post) =>
								post.downvoters.includes(user!.username)
							).length
						}
						<RiDislikeFill className="generic-icon" />
					</span>
				</>
			)}
		</S.Profile>
	);
};

export default Profile;
