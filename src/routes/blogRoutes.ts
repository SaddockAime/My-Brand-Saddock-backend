import express from 'express'
import { createBlogs, viewBlogs, viewBlogById, deleteBlog } from '../modules/blogs/controller/blogController'
import upload from '../utils/multer'

const router = express.Router();

router.post("/createBlogs", upload.single('image'), createBlogs);

router.get("/viewBlogs", viewBlogs);

router.get("/viewBlogById/:id", viewBlogById);

router.delete("/deleteBlog/:id", deleteBlog);


export default router;

