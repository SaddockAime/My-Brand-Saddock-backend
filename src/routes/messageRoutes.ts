import express from 'express';

import { messages, viewMessages, deleteMessage } from '../controllers/messageController';

const router = express.Router();

router.post("/messages", messages);
router.get("/viewMessages", viewMessages);
router.delete("/deleteMessage/:id", deleteMessage);


export default router;