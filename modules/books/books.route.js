import express from "express";
import { CgetAllBooks, CpostABook } from "./books.controller.js";

const router = express.Router();

router.get("/", CgetAllBooks);
router.post("/", CpostABook);

export default router;
