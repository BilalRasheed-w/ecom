import express from "express";
import { NewUser } from "../Controller/userC.js";

const router = express.Router();

router.post("/", NewUser);

export default router;
