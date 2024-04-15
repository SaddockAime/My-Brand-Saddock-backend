import express from 'express';

import {login, signup, viewUsers, deleteUser}  from "../controllers/userController";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/viewusers", viewUsers);
router.delete("/deleteUser/:id", deleteUser);

export default router;