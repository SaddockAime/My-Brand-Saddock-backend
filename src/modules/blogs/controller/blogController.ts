import express from 'express'
import { createBlog, getAllBlogs, getBlogById, deleteBlogById } from '../repository/blogRepo'

import { cloudinary } from "../../../utils/cloudinary";
const asyncHandler = require('express-async-handler')


const uploadImages = async (fileToUpload:any): Promise<{ public_id: string; secure_url: string }> => {
    try {
        if (!fileToUpload.path) {
            throw new Error("No file uploaded");
        }
        const result = await cloudinary.uploader.upload(fileToUpload?.path);
        return {
            public_id: result.public_id,
            secure_url: result.secure_url,
        };
    } catch (error) {
        console.log(error);
        throw new Error("Image upload failed");
    }
};
//create blogs
export const createBlogs = asyncHandler(async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        if(!req.file){
            res.status(400).json({
                message: "Please upload an image"
            })
        }
        const result = await uploadImages(req.file);
        console.log(result)
        const blogData = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            image: {
                public_id: result?.public_id,
                url: result?.secure_url,
            },
        }
        //console.log(blogData)
        const blogs = await createBlog(blogData);
        res.status(200).json({ blogDetail: blogs, message: 'Message sent' });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
});

//get all blogs
export const viewBlogs = async (req: express.Request, res: express.Response) => {
    try {
        const allBlogs = await getAllBlogs()
        if(! allBlogs || allBlogs.length === 0){
            return res.status(404).json({
                message: "blogs were not found"
            })
        }
        return res.status(200).json({
            message: "all blogs were successfully found",
            data: allBlogs
        })
    } catch (error: any) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

//delete blog by id
export const deleteBlog = async (req: express.Request, res: express.Response) => {
    try {
        const blogId = req.params.id;
        const existingBlog = await getBlogById(blogId)
        if(!existingBlog){
            return res.status(404).json({
                message: "No blog found"
            })
        }
        const deletedBlog = await deleteBlogById(blogId)
        return res.status(200).json({
            message: "Blog deleted successfully",
            data: deletedBlog
        })
    } catch (error: any) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

// like a blog
// export const likeBlog = async (req: express.Request, res: express.Response) => {
//     try {
//         const blogId = req.params.id;
//         const userId = req.user;

//         const blog = await getBlogById(blogId);
//         if (!blog) {
//             return res.status(404).json({ 
//                 message: 'Blog not found' 
//             });
//         }

//         if (blog.likes.includes(userId)) {
//             return res.status(404).json({ 
//                 message: 'User already liked the blog' 
//             });
//         }

//         blog.likes.push(userId);
//         await blog.save();

//         return res.status(200).json({ 
//             message: 'Blog liked successfully', 
//             data: blog 
//         });
//     } catch (error: any) {
//         return res.status(500).json({ 
//             message: 'Internal Server Error', 
//             error: error.message 
//         });
//     }
// };

