import express from "express";
import { subscribers, viewSubscribers } from "../controllers/subscriberController";

const router = express.Router();

router.post("/subscribers", subscribers);
router.get("/viewSubscribers", viewSubscribers);

export default router;

