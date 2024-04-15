import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

import allRoutes from "./routes/allRoutes"

//Express application
const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, () => {
    console.log('server running on http://localhost:7070/');
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL as string);
mongoose.connection.on('error', (error: Error) => console.log(error));


app.use('/api/', allRoutes);
