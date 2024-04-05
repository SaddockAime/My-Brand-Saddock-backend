import express from 'express';

import {login, signup, viewUsers}  from "../controllers/userController"

const router = express.Router()



router.post("/signup", signup)
router.post("/login", login)
router.get("/viewusers", viewUsers)


export default router;