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
exports.getSubscriberById = exports.deleteSubscriberById = exports.getAllSubscribers = exports.createSubscribers = void 0;
const subscribers_1 = __importDefault(require("../../../database/models/subscribers"));
const createSubscribers = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subscribers_1.default.create(body);
});
exports.createSubscribers = createSubscribers;
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield subscribers_1.default.find();
});
exports.getAllSubscribers = getAllSubscribers;
const getSubscriberById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subscribers_1.default.findOne({ _id: id });
});
exports.getSubscriberById = getSubscriberById;
const deleteSubscriberById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subscribers_1.default.deleteOne({ _id: id });
});
exports.deleteSubscriberById = deleteSubscriberById;
//# sourceMappingURL=subscriberRepo.js.map