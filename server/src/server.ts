import express from 'express';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import router from "./routes/post/post";

dotenvExpand.expand(dotenv.config());

const app = express();
const port: number = Number.parseInt(process.env.SERVER_PORT!);

app.use(router);
app.listen(port, () => {
    console.log(`server is running... port: ${port}`);
})