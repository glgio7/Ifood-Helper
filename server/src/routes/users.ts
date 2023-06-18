import { Router } from "express";
import { CreateUserRepository } from "../repositories/mongo-users";
import { CreateUserController } from "../use-cases/users/create-user";

export const UsersRoutes = () => {
	const router = Router();

	router.route("/").post(async (req, res) => {
		const createUserRepository = new CreateUserRepository();
		const createUserController = new CreateUserController(createUserRepository);

		const { statusCode, body } = await createUserController.handle({
			body: req.body,
		});

		res.status(statusCode).send(body);
	});

	return router;
};
