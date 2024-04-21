import express from "express";
import Subscriber from "../../../database/models/subscribers";
import { createSubscribers, getAllSubscribers} from "../repository/subscriberRepo"


//subscribers
export const createSubscriber = async (req: express.Request, res: express.Response) => {
    try {
        const {email} = req.body;
        const newSubscriber = await createSubscribers({email});
        return res.status(200).json({
            message: "Subscription Sent",
            data: newSubscriber
        });
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            code: error.code,             
        })
    }
}


//view subscribers
export const viewSubscribers = async (req: express.Request, res: express.Response) => {
    try {
        const allSubscribers = await getAllSubscribers();
        if(! allSubscribers){
            return res.status(404).json({
                message: "Subscribers were not found"
            })
        }
        return res.status(200).json({
            message: "All subscribers were successfully found",
            data: allSubscribers
        })
    }
    catch(error: any){
        console.log(error)
        return res.status(500).json({
            message: error.message,
            code: error.code,             
        })
    }
}