"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const messageRoutes_1 = __importDefault(require("./messageRoutes"));
const subscriberRoutes_1 = __importDefault(require("./subscriberRoutes"));
const blogRoutes_1 = __importDefault(require("./blogRoutes"));
const router = express_1.default.Router();
router.use("/users", userRoutes_1.default);
router.use("/messages", messageRoutes_1.default);
router.use("/subscribers", subscriberRoutes_1.default);
router.use("/blogs", blogRoutes_1.default);
exports.default = router;
//# sourceMappingURL=allRoutes.js.map