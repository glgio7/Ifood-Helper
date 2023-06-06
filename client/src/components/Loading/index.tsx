import { useEffect, useState } from "react";
import icon from "../../assets/head-icon.svg";
import * as S from "./styles";

const Loading = () => {
	const [points, setPoints] = useState(".");

	useEffect(() => {
		setInterval(() => {
			switch (points) {
				case ".":
					setPoints("..");
					break;
				case "..":
					setPoints("...");
					break;
				case "...":
					setPoints(".");
					break;
			}
		}, 1000);
	}, [points]);

	return (
		<S.Loading>
			<img src={icon} alt="Loading please wait..." className="loading-icon" />
			<span>Loading</span>
			<span>{points}</span>
		</S.Loading>
	);
};

export default Loading;
