import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClientMarkers } from "./database/mongo";
import { createRoutes } from "./routes/router";

const main = async () => {
	dotenv.config();

	const port = process.env.PORT || 3000;
	const app = express();

	app.use(express.json());
	app.use(cors());

	app.use("/", createRoutes());

	await MongoClientMarkers.connect();

	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
};

main();
