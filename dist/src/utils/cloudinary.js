"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinary = void 0;
const cloudinary_1 = require("cloudinary");
Object.defineProperty(exports, "cloudinary", { enumerable: true, get: function () { return cloudinary_1.v2; } });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config;
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME || "djrmfg6k9",
    api_key: process.env.API_KEY || "716441766213867",
    api_secret: process.env.API_SECRET || "GqiijgLmq1tlQrFyYeIeGwvAelA",
});
const cloudinaryDeleteImg = (fileToDelete) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        cloudinary_1.v2.uploader.destroy(fileToDelete, (result) => {
            resolve({
                url: result.secure_url,
                asset_id: result.asset_id,
                public_id: result.public_id,
            });
        });
    });
});
//# sourceMappingURL=cloudinary.js.map