import { Router } from "express";
import { MarkersRoute } from "./markers";

export const createRoutes = () => {
	const router = Router();

	router.use("/markers", MarkersRoute());

	return router;
};
