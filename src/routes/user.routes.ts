import express from "express";
const router = express.Router();
import userController from "../controllers/user/user.controller";
import middleware from "../middlewares/auth.middleware";

// apply middleware to all routes below
// router.use(middleware.authenticate.bind(middleware));

const auth = middleware.authenticate.bind(middleware);

router.post("/", auth, userController.create.bind(userController));
router.get("/", auth, userController.getAll.bind(userController));
router.get("/:id", auth, userController.getOne.bind(userController));
router.put("/:id", auth, userController.update.bind(userController));
router.delete("/:id", auth, userController.delete.bind(userController));

export default router;
