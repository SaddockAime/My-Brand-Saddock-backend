import express from 'express';
import allRoutes from "./routes/allRoutes"
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerSetup from '../swaggerConfig';
import './database/config/database'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/api", allRoutes);

swaggerSetup(app);

const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;

