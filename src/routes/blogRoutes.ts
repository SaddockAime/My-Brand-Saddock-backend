import express from 'express'
import { authentication } from '../middleware/authentication';
import { createBlogs, viewBlogs, viewBlogById, deleteBlog, updateBlog } from '../modules/blogs/controller/blogController'
import upload from '../utils/multer'

const router = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: apiKey
 *       name: authorization
 *       in: header
 */

/**
 * @swagger
 * /blogs/createBlogs:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new blog
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 blogDetail:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *                     content:
 *                       type: string
 *                     image:
 *                       type: string
 *                     date:
 *                       type: date
 *                 message:
 *                   type: string
 *                   example: "Blog created successfully"
 *       404:
 *         description: Image not uploaded
 *       500:
 *         description: Internal Server Error
 */
router.post("/createBlogs", authentication, upload.single('image'), createBlogs);

/**
 * @swagger
 * /blogs/viewBlogs:
 *   get:
 *     summary: Get a list of all blogs
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: All blogs successfully found
 *                 data:
 *                   type: object
 *                   properties:
 *                     allBlogs:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           _id:
 *                             type: string
 *                           title:
 *                             type: string
 *                           description:
 *                             type: string
 *                           content:
 *                             type: string
 *                           image:
 *                             type: string
 *                           date:
 *                             type: string
 *                             format: date
 *       404:
 *         description: Blogs were not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/viewBlogs", viewBlogs);

/**
 * @swagger
 * /blogs/viewBlogById/{id}:
 *   get:
 *     summary: Get a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog ID
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Blog found successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     viewBlog:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         content:
 *                           type: string
 *                         image:
 *                           type: string
 *                         date:
 *                           type: string
 *                           format: date
 *       404:
 *         description: No blog found
 *       500:
 *         description: Internal Server Error
 */
router.get("/viewBlogById/:id", viewBlogById);

/**
 * @swagger
 * /blogs/deleteBlog/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog ID
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Blog deleted successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     deletedBlog:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         title:
 *                           type: string
 *                         description:
 *                           type: string
 *                         content:
 *                           type: string
 *                         image:
 *                           type: string
 *                         date:
 *                           type: string
 *                           format: date
 *       404:
 *         description: No blog found
 *       500:
 *         description: Internal Server Error
 */
router.delete("/deleteBlog/:id", authentication, deleteBlog);

/**
 * @swagger
 * /blogs/updateBlog/{id}:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a blog by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Blog updated successfully"
 *       404:
 *         description: Blog not found
 *       500:
 *         description: Internal Server Error
 */
router.put("/updateBlog/:id", authentication, upload.single('image'), updateBlog);

export default router;

