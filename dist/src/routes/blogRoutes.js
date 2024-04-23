"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../modules/blogs/controller/blogController");
const multer_1 = __importDefault(require("../utils/multer"));
// const upload = multer({
//     storage: multer.diskStorage({}),
//     fileFilter: (req: express.Request, file: Express.Multer.File, cb) => {
//         let ext = path.extname(file.originalname);
//         if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
//             return cb(new Error('Only images are allowed'));
//         }
//         cb(null, true);
//     }
// });
// const storage = multer.diskStorage({});
// const fileFilter = (req: any, file: any, cb: any) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(new Error('Only JPEG and PNG images are allowed'), false);
//     }
// };
//const upload = multer({ storage: storage, fileFilter: fileFilter });
const router = express_1.default.Router();
router.post("/createBlogs", multer_1.default.single('image'), blogController_1.createBlogs);
router.get("/viewBlogs", blogController_1.viewBlogs);
router.delete("/deleteBlog/:id", blogController_1.deleteBlog);
exports.default = router;
//# sourceMappingURL=blogRoutes.js.map