"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.encryptPassword = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const passwordhelpers_1 = require("./passwordhelpers");
Object.defineProperty(exports, "encryptPassword", { enumerable: true, get: function () { return passwordhelpers_1.encryptPassword; } });
Object.defineProperty(exports, "comparePassword", { enumerable: true, get: function () { return passwordhelpers_1.comparePassword; } });
const JWT_KEY = process.env.JWT_KEY || 'SECRET';
const generateToken = (userId) => {
    const token = jsonwebtoken_1.default.sign({ userId }, JWT_KEY, { expiresIn: '12h' });
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=index.js.map