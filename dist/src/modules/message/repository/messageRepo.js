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
exports.deleteMessageById = exports.getMessageById = exports.getAllMessages = exports.createMessages = void 0;
const messages_1 = __importDefault(require("../../../database/models/messages"));
const createMessages = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return yield messages_1.default.create(body);
});
exports.createMessages = createMessages;
const getAllMessages = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield messages_1.default.find();
});
exports.getAllMessages = getAllMessages;
const getMessageById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield messages_1.default.findOne({ _id: id });
});
exports.getMessageById = getMessageById;
const deleteMessageById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield messages_1.default.deleteOne({ _id: id });
});
exports.deleteMessageById = deleteMessageById;
//# sourceMappingURL=messageRepo.js.map