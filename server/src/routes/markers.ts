import { Router } from "express";
import { CreateMarkerController } from "../use-cases/markers/create-marker";
import { GetMarkersController } from "../use-cases/markers/get-markers";
import { MarkersRepository } from "../repositories/mongo-markers";

export const MarkersRoute = () => {
	const router = Router();

	router
		.route("/")
		.post(async (req, res) => {
			const markersRepository = new MarkersRepository();
			const createMarkerController = new CreateMarkerController(
				markersRepository
			);

			const { statusCode, body } = await createMarkerController.handle({
				body: req.body,
			});

			res.status(statusCode).send(body);
		})
		.get(async (req, res) => {
			const markersRepository = new MarkersRepository();
			const getMarkersController = new GetMarkersController(markersRepository);

			const { statusCode, body } = await getMarkersController.handle();

			res.status(statusCode).send(body);
		});

	return router;
};
