"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const allRoutes_1 = __importDefault(require("./routes/allRoutes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const swaggerConfig_1 = __importDefault(require("../swaggerConfig"));
require("./database/config/database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)(" * "));
dotenv_1.default.config();
app.use("/api", allRoutes_1.default);
(0, swaggerConfig_1.default)(app);
const PORT = 7070;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map