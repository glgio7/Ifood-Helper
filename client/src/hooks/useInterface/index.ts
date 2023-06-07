import { useState } from "react";

export const useInterface = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [popup, setPopup] = useState<boolean>(false);

	return { popup, setPopup, openMenu, setOpenMenu };
};
