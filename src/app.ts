import express from "express";
import userRoutes from "./routes/user.routes";
import noteRoutes from "./routes/note.routes";
import authRoutes from "./routes/auth.routes";
const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended:false}))

app.use("/auth",authRoutes);
app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

export default app;
