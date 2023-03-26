import * as dotenv from "dotenv";

import cors from "cors";
import express from "express";

import { user_router } from "./router/user.router";

dotenv.config();

if (!process.env["PORT"]) {
  process.exit(1);
}

const PORT: number = parseInt(process.env["PORT"] as string, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", user_router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
