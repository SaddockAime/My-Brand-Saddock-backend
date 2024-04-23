"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_KEY = process.env.JWT_KEY || 'SECRET';
const authentication = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.json({ status: false, message: "You are not logged in." });
    }
    jsonwebtoken_1.default.verify(token, JWT_KEY, (err, decoded) => {
        if (err) {
            return res.json({ status: false, message: "You are not logged in. Invalid Token." });
        }
        req.userId = decoded.userId;
        next();
    });
};
exports.authentication = authentication;
//# sourceMappingURL=authentication.js.map