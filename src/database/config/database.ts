import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Use the MongoDB URI from environment variables
const MONGO_URL = 'mongodb+srv://aimegetz:4ANkqZh1vkvm1p9j@cluster0.7d6ceay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to the database
mongoose.connect(MONGO_URL,)
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Connecting to database error: ", err);
    });
