import express from "express";
import { authentication } from '../middleware/authentication';
import { createSubscriber, viewSubscribers, deleteSubscriber } from "../modules/subscriber/controller/subscriberController";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Subscribers
 *   description: Subscribers routes
 */

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
 * /subscribers/createSubscriber:
 *   post:
 *     summary: create a new subscriber
 *     tags:
 *       - Subscribers
 *     requestBody:
 *       description: subscriber data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *           example:
 *             email: "saddock@gmail.com"
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
 *                   example: "Subscription Sent"
 *                 data:
 *                   type: object
 *                   properties:
 *                     newSubscriber:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         email:
 *                           type: string
 *       500:
 *         description: Internal Server Error
 */
router.post("/createSubscriber", createSubscriber);

/**
 * @swagger
 * /subscribers/viewSubscribers:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get a list of all subscribers
 *     tags:
 *       - Subscribers
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     allSubscribers:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         email:
 *                           type: string
 *       404:
 *         description: Subscribers were not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/viewSubscribers", authentication, viewSubscribers);

/**
 * @swagger
 * /subscribers/deleteSubscriber/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a subscriber by ID
 *     tags:
 *       - Subscribers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: subscriber ID
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
 *                   example: "Subscriber deleted successfully"
 *                 data:
 *                   type: object
 *       404:
 *         description: Subscriber not found
 *       500:
 *         description: Internal Server Error
 */
router.delete("/deleteSubscriber/:id", authentication, deleteSubscriber);

export default router;

