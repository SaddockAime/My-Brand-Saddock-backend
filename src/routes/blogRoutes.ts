import express from 'express'
import { createBlogs, viewBlogs, deleteBlog } from '../modules/blogs/controller/blogController'
import multer from 'multer';
import path from "path";
import upload from '../utils/multer'

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

const router = express.Router();

router.post("/createBlogs", upload.single('image'), createBlogs);

router.get("/viewBlogs", viewBlogs);

router.delete("/deleteBlog/:id", deleteBlog);


export default router;

