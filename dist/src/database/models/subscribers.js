"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const subscriberSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true },
});
const Subscribers = mongoose_1.default.model('Subscribers', subscriberSchema);
exports.default = Subscribers;
//# sourceMappingURL=subscribers.js.map