import { Router } from "express";
import { MarkersRoute } from "./markers";
import { AuthRoutes } from "./users";

export const createRoutes = () => {
	const router = Router();

	router.use("/markers", MarkersRoute());
	router.use("/auth", AuthRoutes());

	return router;
};
