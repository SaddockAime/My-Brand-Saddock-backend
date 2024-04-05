import express from 'express';

import userRoute from './userRoutes';
import messageRoute from './messageRoutes';

const router = express.Router();

router.use("/users", userRoute);
router.use("/messages", messageRoute);

export default router;