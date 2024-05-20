import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

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