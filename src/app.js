const express = require("express");
const userRoutes = require("./routes/user.routes");
const noteRoutes = require("./routes/note.routes");

const app = express();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

module.exports = app;
