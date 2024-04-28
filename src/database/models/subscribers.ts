import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true
    },
});

const Subscribers = mongoose.model('Subscribers', subscriberSchema);

export default Subscribers;
