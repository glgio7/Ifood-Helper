import { Router } from "express";
import { UsersRepository } from "../repositories/mongo-users";
import { CreateUserController } from "../use-cases/users/create-user";
import { AuthUserController } from "../use-cases/users/auth-user";

export const AuthRoutes = () => {
	const router = Router();

	router
		.post("/signup", async (req, res) => {
			const createUserRepository = new UsersRepository();
			const createUserController = new CreateUserController(
				createUserRepository
			);

			const { statusCode, body } = await createUserController.handle({
				body: req.body,
			});

			res.status(statusCode).send(body);
		})
		.post("/signin", async (req, res) => {
			const authUserRepository = new UsersRepository();
			const authUserController = new AuthUserController(authUserRepository);

			const { statusCode, body } = await authUserController.handleEmail({
				body: req.body,
			});

			res.status(statusCode).send(body);
		})
		.post("/token", async (req, res) => {
			const authWithTokenRepository = new UsersRepository();
			const authWithTokenController = new AuthUserController(
				authWithTokenRepository
			);

			const { statusCode, body } = await authWithTokenController.handleToken({
				body: req.body,
			});
			res.status(statusCode).send(body);
		});

	return router;
};
