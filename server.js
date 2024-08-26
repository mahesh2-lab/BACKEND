import express from 'express';
import connectToMongodb from './db/connectToMongo.js';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import reportLoc from "./routes/report.routes.js";
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/reportloc", reportLoc);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);


app.listen(port, () => {
    connectToMongodb();
    console.log(`Server is running on port ${port}`);
});
