import express from "express";
const router = express.Router();
import noteController from "../controllers/note.controller";
import { authenticate } from "../../middleware/auth";

router.post("/", authenticate, noteController.create.bind(noteController));
router.get("/", authenticate, noteController.getAll.bind(noteController));
router.get("/:id", authenticate, noteController.getOne.bind(noteController));
router.put("/:id", authenticate, noteController.update.bind(noteController));
router.delete("/:id", authenticate, noteController.delete.bind(noteController));

export default router;