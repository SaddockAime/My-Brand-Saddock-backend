import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import allRoutes from "./routes/allRoutes"

//Express application
const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(bodyParser.json());

const server = http.createServer(app);

const PORT:number = parseInt(process.env.PORT!) || 7070;

server.listen(PORT, () => {
    console.log('server running on http://localhost:7070/');
});


const MONGO_URL = 'mongodb+srv://aimegetz:4ANkqZh1vkvm1p9j@cluster0.7d6ceay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));


app.use('/api/', allRoutes);
