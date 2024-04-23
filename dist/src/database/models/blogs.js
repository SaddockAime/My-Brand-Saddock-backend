"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const blogSchema = new mongoose_1.default.Schema({
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
    // likes: [{
    //     type: String,
    //     ref: 'User'
    // }],
});
const Blogs = mongoose_1.default.model('Blogs', blogSchema);
exports.default = Blogs;
//# sourceMappingURL=blogs.js.map