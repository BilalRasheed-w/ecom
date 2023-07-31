import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database.js";
dotenv.config();

const port = process.env.Port || 4000;
connectDB();

app.listen(port, () => {
  console.log("from backend",`http://localhost:${port}`);
});
