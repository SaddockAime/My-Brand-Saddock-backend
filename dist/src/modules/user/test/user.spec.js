"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../../server"));
const chai_http_1 = __importDefault(require("chai-http"));
const chai_1 = __importStar(require("chai"));
chai_1.default.use(chai_http_1.default);
const router = () => chai_1.default.request(server_1.default);
let token = '';
let userId = '';
describe("MyBrand backend user test cases", () => {
    // Test for login
    it("Should be able to log in an existing user", (done) => {
        router()
            .post("/api/users/login")
            .send({
            email: "saddock@gmail.com",
            password: "Saddock_2000"
        })
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(200);
            (0, chai_1.expect)(response.body).to.be.an("object");
            (0, chai_1.expect)(response.body).to.have.property("data");
            token = response._body.data.token;
            done(error);
        });
    });
    it("Should be able to give an error", (done) => {
        router()
            .post("/api/users/login")
            .send({
            email: "saddock@gmail.com",
            password: "Saddock_20000000"
        })
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(404);
            (0, chai_1.expect)(response.body).to.be.an("object");
            done(error);
        });
    });
    // Test for creating user
    it("Should be able to create user", (done) => {
        router()
            .post("/api/users/signup")
            .send({
            username: "King",
            email: "king@gmail.com",
            password: "King_2000"
        })
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(200);
            (0, chai_1.expect)(response.body).to.be.an("object");
            (0, chai_1.expect)(response.body).to.have.property("data");
            (0, chai_1.expect)(response.body.data).to.have.property("username", "King");
            (0, chai_1.expect)(response.body.data).to.have.property("email", "king@gmail.com");
            userId = response._body.data._id;
            done(error);
        });
    });
    it("Should be able to give an error ", (done) => {
        router()
            .post("/api/users/signup")
            .send({
            username: "King",
            email: "king@gmail.com",
            password: "King_2000"
        })
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(404);
            (0, chai_1.expect)(response.body).to.be.an("object");
            done(error);
        });
    });
    it("Should be able to give an error ", (done) => {
        router()
            .post("/api/users/signup")
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(404);
            (0, chai_1.expect)(response.body).to.be.an("object");
            done(error);
        });
    });
    // Test for view users
    it("Should be able to get all users", (done) => {
        router()
            .get("/api/users/viewusers")
            .set("Authorization", `Bearer ${token}`)
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(200);
            (0, chai_1.expect)(response.body).to.be.a("object");
            (0, chai_1.expect)(response.body).to.have.property("data");
            (0, chai_1.expect)(response.body.message).to.be.a("string");
            done(error);
        });
    });
    // Test for deleting a user
    it("Should be able to delete a user by ID", (done) => {
        // Replace 'userId' with an actual user ID from your database
        router()
            .delete(`/api/users/deleteUser/${userId}`)
            .set("Authorization", `Bearer ${token}`)
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(200);
            (0, chai_1.expect)(response.body).to.be.an("object");
            (0, chai_1.expect)(response.body.message).to.be.a("string");
            done(error);
        });
    });
    it("Should be able to give an error", (done) => {
        router()
            .post("/api/users/login")
            .send({
            email: "king@gmail.com",
            password: "King_2000"
        })
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(404);
            (0, chai_1.expect)(response.body).to.be.an("object");
            done(error);
        });
    });
    it("Should be able to give an error", (done) => {
        // Replace 'userId' with an actual user ID from your database
        router()
            .delete(`/api/users/deleteUser/${userId}`)
            .set("Authorization", `Bearer ${token}`)
            .end((error, response) => {
            (0, chai_1.expect)(response).to.have.status(404);
            (0, chai_1.expect)(response.body).to.be.an("object");
            done(error);
        });
    });
});
//# sourceMappingURL=user.spec.js.map