import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClientMarkers, MongoClientUsers } from "./database/mongo";
import { createRoutes } from "./routes/router";

const main = async () => {
	dotenv.config();

	const port = process.env.PORT || 3000;
	const app = express();

	app.use(express.json());
	app.use(
		cors({
			origin: ["http://localhost:5173", "https://ifoodhelper.vercel.app"],
			exposedHeaders: "Access-Control-Allow-Origin",
		})
	);

	app.use("/", createRoutes());

	await MongoClientMarkers.connect();
	await MongoClientUsers.connect();

	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
};

main();
