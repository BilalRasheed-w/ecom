import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors()); 

// Imports
import ProductRoutes from "./Routes/productR.js";
import UserRoutes from "./Routes/userR.js";


app.use("/api/products", ProductRoutes);
app.use("/user", UserRoutes);

export default app;
