const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note.controller");

router.post("/", noteController.create.bind(noteController));
router.get("/", noteController.getAll.bind(noteController));
router.get("/:id", noteController.getOne.bind(noteController));
router.put("/:id", noteController.update.bind(noteController));
router.delete("/:id", noteController.delete.bind(noteController));

module.exports = router;