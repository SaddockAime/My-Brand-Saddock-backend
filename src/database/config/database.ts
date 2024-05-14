import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Use the MongoDB URI from environment variables
// const MONGO_URL: any = process.env.MONGO_URL
// // Connect to the database
// mongoose.connect(MONGO_URL,)
//     .then(() => {
//         console.log("Connected to the database");
//     })
//     .catch((err) => {
//         console.log("Connecting to database error: ", err);
//     });

    export const connectMONGO = async () => {
        const URL = process.env.MONGO_URL;
        if (!URL) {
          console.error('MongoDB URI is not defined in the environment variables.');
          return; 
        }
        try {
          await mongoose.connect(URL)
          console.log('Connected to MongoDB');
        } catch (error) {
          console.error('Failed to connect to MongoDB:', error);
        }
      };