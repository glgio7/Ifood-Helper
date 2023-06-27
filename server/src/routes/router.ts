import express, { NextFunction, Request, Response, Router } from "express";
import { MarkersRoute } from "./markers";
import { AuthRoutes } from "./users";
import * as swaggerDocument from "../../swagger.json";
import swaggerUi from "swagger-ui-express";

export const createRoutes = () => {
	const router = Router();

	router.use("/markers", MarkersRoute());
	router.use("/auth", AuthRoutes());

	router.use(
		"/swagger-ui.css",
		(req: Request, res: Response, next: NextFunction) => {
			res.set("Content-Type", "text/css");
			next();
		},
		express.static("node_modules/swagger-ui-dist/swagger-ui.css")
	);

	router.use(
		"/",
		swaggerUi.serve,
		swaggerUi.setup(swaggerDocument, {
			customSiteTitle: "Ifood Helper | API Doc",
			customfavIcon: "https://ifoodhelper.vercel.app/favicon.png",
			customCssUrl: "https://api-ifoodhelper.vercel.app/swagger-ui.css"
		})
	);

	return router;
};
