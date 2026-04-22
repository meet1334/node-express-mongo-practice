import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { UserRoutes } from './routes/user.routes';
import { NoteRoutes } from './routes/note.routes';
import authRoutes from './routes/auth.routes';

const app = express();
app.use(cors()); // allow all origins

const userRoutes = new UserRoutes();
const noteRoutes = new NoteRoutes();

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

app.use('/auth', authRoutes);
app.use('/users', userRoutes.router);
app.use('/notes', noteRoutes.router);

export default app;
