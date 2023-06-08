import * as S from "./styles";
import { LoadingMarkerProps } from "./types";

const LoadingMarker = ({ position }: LoadingMarkerProps) => {
	return (
		<S.LoadingMarker position={position}>
			<div className="loader">
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</S.LoadingMarker>
	);
};

export default LoadingMarker;
