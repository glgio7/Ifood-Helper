import { Router } from "express";
import { MarkersRoute } from "./markers";
import { AuthRoutes } from "./users";
import * as swaggerDocument from "../../swagger.json";
import swaggerUi from "swagger-ui-express";

export const createRoutes = () => {
	const router = Router();

	router.use("/markers", MarkersRoute());
	router.use("/auth", AuthRoutes());
	router.use(
		"/",
		swaggerUi.serve,
		swaggerUi.setup(swaggerDocument, {
			customSiteTitle: "Ifood Helper | API Doc",
			customfavIcon: "https://ifoodhelper.vercel.app/favicon.png",
		})
	);

	return router;
};
