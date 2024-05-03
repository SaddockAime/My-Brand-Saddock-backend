import express from 'express'
import { createBlog, getAllBlogs, getBlogById, deleteBlogById, updateBlogById } from '../repository/blogRepo'

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
            res.status(404).json({
                message: "Please upload an image"
            })
        }
        const result = await uploadImages(req.file);
        //console.log(result)
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
        res.status(200).json({ blogDetail: blogs, message: 'Blog created successfully' });
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

export const viewBlogById = async (req: express.Request, res: express.Response) => {
    try {
        const blogId = req.params.id;
        const existingBlog = await getBlogById(blogId);
        if(!existingBlog){
            return res.status(404).json({
                message: "No blog found"
            })
        }
        const viewBlog = await getBlogById(blogId)
        return res.status(200).json({
            message: "Blog found successfully",
            data: viewBlog
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

//update blog by id
export const updateBlog = asyncHandler(async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const blogId = req.params.id;
        if(!req.file){
            res.status(404).json({
                message: "Please upload an image"
            });
            return;
        }
        const result = await uploadImages(req.file);
        //console.log(result);
        const body = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            image: {
                public_id: result?.public_id,
                url: result?.secure_url,
            }
        };
        
        const updatedBlog = await updateBlogById(blogId, body)
        if(!updatedBlog){
            res.status(404).json({
                message: `Blog with ${blogId}} is not found.`,
            });
        }
        res.status(200).json({
            message: 'Blog Updated successfully',
            data: updatedBlog,
        });
    } catch (error: any) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
});

