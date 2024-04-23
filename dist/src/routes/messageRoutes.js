"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageController_1 = require("../modules/message/controller/messageController");
const router = express_1.default.Router();
/**
 * @swagger
 * /messages/createMessage:
 *   post:
 *     summary: Create a new message
 *     requestBody:
 *       description: message data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               message:
 *                 type: string
 *           example:
 *             name: "saddock"
 *             email: "saddock@gmail.com"
 *             message: "Hello there!"
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
 *                   example: "Message Sent"
 *                 data:
 *                   type: object
 *                   properties:
 *                     newMessage:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         email:
 *                           type: string
 *                         message:
 *                           type: string
 *       500:
 *         description: Internal Server Error
 */
router.post("/createMessage", messageController_1.createMessage);
/**
 * @swagger
 * /messages/viewMessages:
 *   get:
 *     summary: Get a list of all messages
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
 *                   example: "All Messages successfully found"
 *                 data:
 *                   type: object
 *                   properties:
 *                     allMessages:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         email:
 *                           type: string
 *                         message:
 *                           type: string
 *       404:
 *         description: messages were not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/viewMessages", messageController_1.viewMessages);
/**
 * @swagger
 * /messages/deleteMessage/{id}:
 *   delete:
 *     summary: Delete a message by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: message ID
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
 *                   example: "Message deleted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     deletedMessage:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         email:
 *                           type: string
 *                         message:
 *                           type: string
 *       404:
 *         description: Message not found
 *       500:
 *         description: Internal Server Error
 */
router.delete("/deleteMessage/:id", messageController_1.deleteMessage);
exports.default = router;
//# sourceMappingURL=messageRoutes.js.map