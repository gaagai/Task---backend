import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import taskRoutes from "./routes/taskRoutes";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
connectDB();

const app: Application = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
