import express from 'express';
import allRoutes from "./routes/allRoutes"
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerSetup from '../swaggerConfig';
import { connectMONGO } from './database/config/database';

const app = express();
app.use(express.json());
app.use(cors(" * " as any));
dotenv.config();

app.get('/', (rep: express.Request, res: express.Response)=>{
    res.status(200).json({
      message: 'Welcome to my Brand Backend API Saddock'
    })
  })

app.use("/api", allRoutes);

swaggerSetup(app);

const PORT = 7070;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const startServer = async () => {
  try {
    await connectMONGO();
    app.listen(PORT, () => {
      console.log(`Server is running on Port:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();

export default app;

