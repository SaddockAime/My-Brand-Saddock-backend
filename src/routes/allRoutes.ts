import express from 'express';

import userRoute from './userRoutes';
import messageRoute from './messageRoutes';
import subscriberRoute from './subscriberRoutes';

const router = express.Router();

router.use("/users", userRoute);
router.use("/messages", messageRoute);
router.use("/subscribers", subscriberRoute);

export default router;