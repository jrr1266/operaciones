import express from "express";
import morgan from "morgan";
//cors
import cors from "cors";
//config
import config from "./config.js";
//router
import router from "./routers/router.js";
const app = express();

app.set("port",config.port)

//intermediarios
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//rutas
app.use("/operaciones",router); 

export default app;