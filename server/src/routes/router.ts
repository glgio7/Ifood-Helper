import { Router } from "express";
import { MarkersRoute } from "./markers";
import { UsersRoutes } from "./users";

export const createRoutes = () => {
	const router = Router();

	router.use("/markers", MarkersRoute());
	router.use("/users", UsersRoutes());

	return router;
};
