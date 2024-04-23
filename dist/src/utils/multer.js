"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
exports.default = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({}),
    fileFilter: (req, file, cb) => {
        console.log(file);
        let ext = path_1.default.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return cb(new Error('Only images are allowed'));
        }
        cb(null, true);
    }
});
//# sourceMappingURL=multer.js.map