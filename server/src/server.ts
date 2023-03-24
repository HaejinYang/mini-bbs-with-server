import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import postRouter from "./routes/post/post";
import commentRouter from './routes/comment/comment';
import cors from 'cors';

dotenvExpand.expand(dotenv.config());

const app = express();
const port: number = Number.parseInt(process.env.SERVER_PORT!);

const corsOption = {
    origin: 'http://127.0.0.1:3000'
};

app.use(cors(corsOption));
app.use(express.json());

app.use('/api', postRouter);
app.use('/api', commentRouter);
app.listen(port, () => {
    console.log(`server is running... port: ${port}`);

})