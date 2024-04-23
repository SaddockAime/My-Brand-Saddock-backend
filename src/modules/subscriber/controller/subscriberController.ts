import express from "express";
import { createSubscribers, getAllSubscribers, deleteSubscriberById, getSubscriberById} from "../repository/subscriberRepo"
import dotenv from "dotenv";
import nodemailer from 'nodemailer';

dotenv.config();

//
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'stmp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user:'aimegetz@gmail.com',
        pass: 'xvxh xgey wksf cmkx'
    }
});

const sendSubscriptionEmail = async (email: string) => {
    try {
        const mailOptions = {
            from: process.env.USER,
            to: email,
            subject: 'Subscription Confirmation',
            text: 'Thank you for subscribing to My Page! You have successfully subscribed to receive updates.'
        };

        await transporter.sendMail(mailOptions);
        console.log('Subscription email sent successfully');
    } catch (error) {
        console.error('Error sending subscription email:', error);
    }
};



//subscribers
export const createSubscriber = async (req: express.Request, res: express.Response) => {
    try {
        const {email} = req.body;
        const newSubscriber = await createSubscribers({email});
        // Send subscription confirmation email
        await sendSubscriptionEmail(email);

        return res.status(200).json({
            message: "Subscription Sent",
            data: newSubscriber
        });
    } catch (error: any) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message             
        })
    }
}


//view subscribers
export const viewSubscribers = async (req: express.Request, res: express.Response) => {
    try {
        const allSubscribers = await getAllSubscribers();
        if(! allSubscribers || allSubscribers.length === 0){
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
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message             
        })
    }
}

//delete subscriber
export const deleteSubscriber = async (req: express.Request, res: express.Response) => {
    try {
        const subscriberId = req.params.id;
        const existingSubscriber = await getSubscriberById(subscriberId);
        if (!existingSubscriber) {
            return res.status(404).json({
                message: "Subscriber not found"
            });
        }
        // Delete the subscriber
        const deletedsub = await deleteSubscriberById(subscriberId);
        return res.status(200).json({
            message: "Subscriber deleted successfully",
            data: deletedsub
        });
    } 
    catch (error: any) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}