import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { sendMail } from "./send-email-controller";
import cors from "cors";
dotenv.config();

const app: Application = express();
const HOST = process.env.HOST || "http://localhost";
const PORT = parseInt(process.env.PORT || "7000");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/send-mail", sendMail);

app.listen(PORT, () => console.log(`listening in ${HOST} on port ${PORT}`));
