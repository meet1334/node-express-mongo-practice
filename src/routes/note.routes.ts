import express from "express";
const router = express.Router();
import noteController from "../controllers/note/note.controller";
import middleware from "../middlewares/auth.middleware";

const auth = middleware.authenticate.bind(middleware);

router.post("/", auth, noteController.create.bind(noteController));
router.get("/", auth, noteController.getAll.bind(noteController));
router.get("/:id", auth, noteController.getOne.bind(noteController));
router.put("/:id", auth, noteController.update.bind(noteController));
router.delete("/:id", auth, noteController.delete.bind(noteController));

export default router;
