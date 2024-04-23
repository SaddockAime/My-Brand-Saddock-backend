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
exports.deleteBlogById = exports.getBlogById = exports.getAllBlogs = exports.createBlog = void 0;
const blogs_1 = __importDefault(require("../../../database/models/blogs"));
const createBlog = (body) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log(body)
    return yield blogs_1.default.create(body);
});
exports.createBlog = createBlog;
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield blogs_1.default.find();
});
exports.getAllBlogs = getAllBlogs;
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blogs_1.default.findOne({ _id: id });
});
exports.getBlogById = getBlogById;
const deleteBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blogs_1.default.deleteOne({ _id: id });
});
exports.deleteBlogById = deleteBlogById;
//# sourceMappingURL=blogRepo.js.map