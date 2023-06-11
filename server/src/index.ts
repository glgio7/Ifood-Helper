import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClientMarkers } from "./database/mongo";

const main = async () => {
	dotenv.config();

	const port = process.env.PORT || 3333;
	const app = express();

	app.use(express.json());
	app.use(cors());

	await MongoClientMarkers.connect();

	app.listen(port, () => {
		console.log("Server is running!");
	});
};

main();
