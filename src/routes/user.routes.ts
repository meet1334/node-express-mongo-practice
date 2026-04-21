import express from "express";
const router = express.Router();
import userController from "../controllers/user.controller";
import { authenticate } from "../../middleware/auth";

router.post("/", authenticate, userController.create.bind(userController));
router.get("/", authenticate, userController.getAll.bind(userController));
router.get("/:id", authenticate, userController.getOne.bind(userController));
router.put("/:id", authenticate, userController.update.bind(userController));
router.delete("/:id", authenticate, userController.delete.bind(userController));

export default router;
