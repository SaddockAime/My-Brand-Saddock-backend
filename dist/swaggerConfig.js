"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MyBrand Backend API',
            version: '1.0.0',
            description: 'Documentation for MyBrand Backend API',
        },
        servers: [
            {
                url: 'http://localhost:7070/api',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};
const specs = (0, swagger_jsdoc_1.default)(options);
const swaggerSetup = (app) => {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
};
exports.default = swaggerSetup;
//# sourceMappingURL=swaggerConfig.js.map