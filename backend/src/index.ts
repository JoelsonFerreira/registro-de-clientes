import express from "express"
import cors from "cors"

import { env } from "./env"
import router from "./routes";

import "./utils/coords-path";

const app = express()
const port = env.PORT ?? 5000

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`App listening on http://localhost:${port}/`))