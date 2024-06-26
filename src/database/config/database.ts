import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Use the MongoDB URI from environment variables
const MONGO_URL: any = process.env.MONGO_URL
// Connect to the database
mongoose.connect(MONGO_URL,)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Connecting to database error: ", err);
    });
