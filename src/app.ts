import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { UserRoutes } from './routes/user.routes';
import { NoteRoutes } from './routes/note.routes';
import authRoutes from './routes/auth.routes';
import path from 'path';

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

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse form data
app.use('/public', express.static('public')); // access public folder fo image/video access
app.get('/', (req, res) => {
  res.render('homepage');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/users', userRoutes.router);
app.use('/notes', noteRoutes.router);

// Global Error Handler to catch Multer and other unhandled errors as JSON
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const status = err.httpCode || err.status || 500;
  res.status(status).json({
    message: err.description || err.message || 'Internal Server Error',
    error: err
  });
});

export default app;
