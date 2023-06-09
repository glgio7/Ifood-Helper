import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const main = async () => {
	dotenv.config();

	const port = process.env.PORT || 3333;
	const app = express();

	app.use(express.json());
	app.use(cors());

	app.listen(port, () => {
		console.log("Server is running!");
	});
};

main();
