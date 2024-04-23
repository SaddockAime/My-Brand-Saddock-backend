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
exports.deleteUser = exports.viewUsers = exports.signup = exports.login = void 0;
const helpers_1 = require("../../../helpers");
const userRepo_1 = require("../repository/userRepo");
//Login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield (0, userRepo_1.getUserByEmail)(email);
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'no user'
            });
        }
        const isPasswordMatch = yield (0, helpers_1.comparePassword)(password, user.password);
        if (!isPasswordMatch) {
            return res.status(404).json({
                status: 'fail',
                message: 'Wrong password'
            });
        }
        const token = (0, helpers_1.generateToken)(user._id);
        return res.status(200).json({
            status: 'success',
            data: {
                user,
                token
            },
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.login = login;
//signup
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log("hello my people")
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(404).json({
                status: 'fail',
                message: 'insert user credentials'
            });
        }
        const existingUser = yield (0, userRepo_1.getUserByEmail)(email);
        //console.log(existingUser)
        if (existingUser) {
            return res.status(404).json({
                status: 'fail',
                message: 'user already exists'
            });
        }
        const hashedPassword = yield (0, helpers_1.encryptPassword)(password);
        const user = yield (0, userRepo_1.createUser)({
            username,
            email,
            password: hashedPassword,
        });
        return res.status(200).json({
            status: 'success',
            data: user
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.signup = signup;
//view all users
const viewUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield (0, userRepo_1.getAllUsers)();
        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({
                message: "Allusers were not found"
            });
        }
        return res.status(200).json({
            message: "All Users successfully found",
            data: allUsers
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.viewUsers = viewUsers;
// delete users
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        // Check if the user exists
        const existingUser = yield (0, userRepo_1.getUserById)(userId);
        if (!existingUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const deletedUser = yield (0, userRepo_1.deleteUserById)(userId);
        return res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map