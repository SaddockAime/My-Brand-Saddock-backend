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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.viewBlogs = exports.createBlogs = void 0;
const blogRepo_1 = require("../repository/blogRepo");
const cloudinary_1 = require("../../../utils/cloudinary");
const asyncHandler = require('express-async-handler');
const uploadImages = (fileToUpload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!fileToUpload.path) {
            throw new Error("No file uploaded");
        }
        const result = yield cloudinary_1.cloudinary.uploader.upload(fileToUpload === null || fileToUpload === void 0 ? void 0 : fileToUpload.path);
        return {
            public_id: result.public_id,
            secure_url: result.secure_url,
        };
    }
    catch (error) {
        console.log(error);
        throw new Error("Image upload failed");
    }
});
//create blogs
exports.createBlogs = asyncHandler((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.file) {
            res.status(400).json({
                message: "Please upload an image"
            });
        }
        const result = yield uploadImages(req.file);
        console.log(result);
        const blogData = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content,
            image: {
                public_id: result === null || result === void 0 ? void 0 : result.public_id,
                url: result === null || result === void 0 ? void 0 : result.secure_url,
            },
        };
        //console.log(blogData)
        const blogs = yield (0, blogRepo_1.createBlog)(blogData);
        res.status(200).json({ blogDetail: blogs, message: 'Message sent' });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
}));
//get all blogs
const viewBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBlogs = yield (0, blogRepo_1.getAllBlogs)();
        if (!allBlogs || allBlogs.length === 0) {
            return res.status(404).json({
                message: "blogs were not found"
            });
        }
        return res.status(200).json({
            message: "all blogs were successfully found",
            data: allBlogs
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.viewBlogs = viewBlogs;
//delete blog by id
const deleteBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.id;
        const existingBlog = yield (0, blogRepo_1.getBlogById)(blogId);
        if (!existingBlog) {
            return res.status(404).json({
                message: "No blog found"
            });
        }
        const deletedBlog = yield (0, blogRepo_1.deleteBlogById)(blogId);
        return res.status(200).json({
            message: "Blog deleted successfully",
            data: deletedBlog
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.deleteBlog = deleteBlog;
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
//# sourceMappingURL=blogController.js.map