"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from the .env file
dotenv_1.default.config();
// Use the MongoDB URI from environment variables
const MONGO_URL = 'mongodb+srv://aimegetz:4ANkqZh1vkvm1p9j@cluster0.7d6ceay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Connect to the database
mongoose_1.default.connect(MONGO_URL)
    .then(() => {
    console.log("Connected to the database");
})
    .catch((err) => {
    console.log("Connecting to database error: ", err);
});
//# sourceMappingURL=database.js.map