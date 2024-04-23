"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subscriberController_1 = require("../modules/subscriber/controller/subscriberController");
const router = express_1.default.Router();
/**
 * @swagger
 * /subscribers/createSubscriber:
 *   post:
 *     summary: create a new subscriber
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
router.post("/createSubscriber", subscriberController_1.createSubscriber);
/**
 * @swagger
 * /subscribers/viewSubscribers:
 *   get:
 *     summary: Get a list of all subscribers
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
router.get("/viewSubscribers", subscriberController_1.viewSubscribers);
/**
 * @swagger
 * /subscribers/deleteSubscriber/{id}:
 *   delete:
 *     summary: Delete a subscriber by ID
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
 *                   example: "Subscriber deleted successfully"
 *                 data:
 *                   type: object
 *       404:
 *         description: Subscriber not found
 *       500:
 *         description: Internal Server Error
 */
router.delete("/deleteSubscriber/:id", subscriberController_1.deleteSubscriber);
exports.default = router;
//# sourceMappingURL=subscriberRoutes.js.map