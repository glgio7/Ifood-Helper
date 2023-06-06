import styled from "styled-components";

export const Home = styled.main`
	min-height: calc(100vh - 64px);
	width: 100%;

	position: relative;
`;
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	position: relative;

	.leaftlet-container {
		height: calc(100vh - 64px);
		width: 100%;
		z-index: 9;
	}

	.custom-popup .leaflet-popup-content-wrapper {
		background: #bb2222;

		color: #fff;
	}
	.custom-popup .leaflet-popup-content-wrapper a {
		color: rgba(255, 255, 255, 0.1);
	}

	.custom-popup .leaflet-popup-close-button {
		color: #fff;
	}

	.custom-popup .leaflet-popup-tip-container {
		background: transparent;
	}
	.custom-popup .leaflet-popup-tip {
		background: #bb2222;
	}
`;

export const CustomPopup = styled.div`
	position: absolute;
	display: none;
	z-index: 10;

	width: 80%;
	height: 80%;

	border-radius: 10px;

	background-color: #bb2222;
`;
