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
exports.deleteMessage = exports.viewMessages = exports.createMessage = void 0;
const messageRepo_1 = require("../repository/messageRepo");
//messages
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log("hello")
    try {
        const { name, email, message } = req.body;
        const newMessage = yield (0, messageRepo_1.createMessages)({ name, email, message });
        return res.status(200).json({
            message: "Message Sent",
            data: newMessage
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.createMessage = createMessage;
//view all messages
const viewMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allMessages = yield (0, messageRepo_1.getAllMessages)();
        if (!allMessages || allMessages.length === 0) {
            return res.status(404).json({
                message: "messages were not found"
            });
        }
        return res.status(200).json({
            message: "All Messages successfully found",
            data: allMessages
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.viewMessages = viewMessages;
//delete message
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messageId = req.params.id;
        const existingMessage = yield (0, messageRepo_1.getMessageById)(messageId);
        if (!existingMessage) {
            return res.status(404).json({
                message: "Message not found"
            });
        }
        // Delete the message
        const deletedMessage = yield (0, messageRepo_1.deleteMessageById)(messageId);
        return res.status(200).json({
            message: "Message deleted successfully",
            data: deletedMessage
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=messageController.js.map