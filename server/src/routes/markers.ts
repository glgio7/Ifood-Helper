import { Router } from "express";
import { CreateMarkerRepositoy } from "../repositories/markers/mongo-create-marker";
import { CreateMarkerController } from "../use-cases/create-marker";

export const MarkersRoute = () => {
	const router = Router();

	router.route("/").post(async (req, res) => {
		const createMarkerRepository = new CreateMarkerRepositoy();
		const createMarkerController = new CreateMarkerController(
			createMarkerRepository
		);

		const { statusCode, body } = await createMarkerController.handle({
			body: req.body,
		});

		res.status(statusCode).send(body);
	});

	return router;
};
