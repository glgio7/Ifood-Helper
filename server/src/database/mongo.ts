import { MongoClient as Mongo, Db } from "mongodb";
import { config } from "dotenv";

config();

const url = process.env.MONGODB_URL || "localhost:17017";
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

export const MongoClientMarkers = {
	client: undefined as unknown as Mongo,
	db: undefined as unknown as Db,

	async connect(): Promise<void> {
		try {
			const client = new Mongo(url, { auth: { username, password } });
			const db = client.db("markers-db");
			await client.connect();

			this.client = client;
			this.db = db;

			console.log("Connected to Markers Database!");
		} catch (error) {
			console.error("Failed to connect to Database :(", error);
		}
	},
};

export const MongoClientUsers = {
	client: undefined as unknown as Mongo,
	db: undefined as unknown as Db,

	async connect(): Promise<void> {
		try {
			const client = new Mongo(url, { auth: { username, password } });
			const db = client.db("users-db");

			await client.connect();

			this.client = client;
			this.db = db;

			console.log("Connected to users database!");
		} catch (error) {
			console.error("Failed to connect to db :(", error);
		}
	},
};
