import express from 'express';
import { authentication } from '../middleware/authentication';
import {login, signup, viewUsers, deleteUser}  from "../modules/user/controller/userController";

const router = express.Router();

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: Signup a new user
 *     requestBody:
 *       description: User data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           example:
 *             username: "saddock"
 *             email: "saddock@gmail.com"
 *             password: "Saddock_123"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         username:
 *                           type: string
 *                         email:
 *                           type: string
 *       404:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.post("/signup", signup);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       description: User credentials
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           example:
 *             email: "saddock@gmail.com"
 *             password: "Saddock_123"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         username:
 *                           type: string
 *                         email:
 *                           type: string
 *                     token:
 *                       type: string
 *       404:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
router.post("/login", login);

/**
 * @swagger
 * /users/viewusers:
 *   get:
 *     summary: Get a list of all users
 *     security:
 *       - bearerAuth: []
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
 *                   example: "All Users successfully found"
 *                 data:
 *                   type: object
 *                   properties:
 *                     allUsers:
 *                       type: object
 *       404:
 *         Allusers were not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/viewusers", authentication, viewUsers);

/**
 * @swagger
 * /users/deleteUser/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
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
 *                   example: "User deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     deletedUser:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         username:
 *                           type: string
 *                         email:
 *                           type: string
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
router.delete("/deleteUser/:id", authentication, deleteUser);

export default router;