import express from "express";
import userRoutes from "./routes/user.routes";
import noteRoutes from "./routes/note.routes";
import authRoutes from "./routes/auth.routes";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors()); // allow all origins

// app.use(
//   cors({
//     origin: "http://localhost:3000", // only allow this frontend
//     methods: ["GET", "POST"],
//     credentials: true
//   })
// );

app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse form data

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/notes", noteRoutes);

export default app;
