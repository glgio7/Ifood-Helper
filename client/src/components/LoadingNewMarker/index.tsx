import * as S from "./styles";
import { LoadingNewMarkerProps } from "./types";

const LoadingNewMarker = ({ position }: LoadingNewMarkerProps) => {
	return (
		<S.LoadingNewMarker position={position}>
			<div className="loader">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</S.LoadingNewMarker>
	);
};

export default LoadingNewMarker;
