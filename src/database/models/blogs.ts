import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    description: { 
        type: String, 
        required: true
    },
    content: { 
        type: String, 
        required: true
    },
    image: { 
        //Data: Buffer, 
        //type: String,
        public_id: 'string',
        url: 'string',
    },
    date: {
        type: Date, 
        default: Date.now
    },
});
const Blogs = mongoose.model('Blogs', blogSchema);

export default Blogs;