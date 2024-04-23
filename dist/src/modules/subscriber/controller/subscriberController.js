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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubscriber = exports.viewSubscribers = exports.createSubscriber = void 0;
const subscriberRepo_1 = require("../repository/subscriberRepo");
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
dotenv_1.default.config();
//
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    host: 'stmp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'aimegetz@gmail.com',
        pass: 'xvxh xgey wksf cmkx'
    }
});
const sendSubscriptionEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mailOptions = {
            from: process.env.USER,
            to: email,
            subject: 'Subscription Confirmation',
            text: 'Thank you for subscribing to My Page! You have successfully subscribed to receive updates.'
        };
        yield transporter.sendMail(mailOptions);
        console.log('Subscription email sent successfully');
    }
    catch (error) {
        console.error('Error sending subscription email:', error);
    }
});
//subscribers
const createSubscriber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const newSubscriber = yield (0, subscriberRepo_1.createSubscribers)({ email });
        // Send subscription confirmation email
        yield sendSubscriptionEmail(email);
        return res.status(200).json({
            message: "Subscription Sent",
            data: newSubscriber
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.createSubscriber = createSubscriber;
//view subscribers
const viewSubscribers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSubscribers = yield (0, subscriberRepo_1.getAllSubscribers)();
        if (!allSubscribers || allSubscribers.length === 0) {
            return res.status(404).json({
                message: "Subscribers were not found"
            });
        }
        return res.status(200).json({
            message: "All subscribers were successfully found",
            data: allSubscribers
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.viewSubscribers = viewSubscribers;
//delete subscriber
const deleteSubscriber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subscriberId = req.params.id;
        const existingSubscriber = yield (0, subscriberRepo_1.getSubscriberById)(subscriberId);
        if (!existingSubscriber) {
            return res.status(404).json({
                message: "Subscriber not found"
            });
        }
        // Delete the subscriber
        const deletedsub = yield (0, subscriberRepo_1.deleteSubscriberById)(subscriberId);
        return res.status(200).json({
            message: "Subscriber deleted successfully",
            data: deletedsub
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.deleteSubscriber = deleteSubscriber;
//# sourceMappingURL=subscriberController.js.map