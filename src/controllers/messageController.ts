import express from 'express'
import Message from '../modules/messages'


//messages
export const messages = async (req: express.Request, res: express.Response) => {
    //console.log("hello")
    try {
        const {name, email, message} = req.body
            const newMessage = await Message.create({name, email, message})


            return res.status(200).json({
                message: "Message Sent",
                data: newMessage
            })

    } catch(error: any) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            code: error.code,             
        })
    }
}


//view all messages
export const viewMessages = async (req: express.Request, res: express.Response) => {
    try {
        const allMessages = await Message.find()
        
        if(! allMessages){
            return res.status(400).json({
                message: "messages were not found"
            })
        }
        return res.status(200).json({
            message: "All Messages successfully found",
            data: allMessages
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


//delete message
export const deleteMessage = async (req: express.Request, res: express.Response) => {
    try {
        const messageId = req.params.id; 
        // Check if the message exists
        const existingMessage = await Message.findById(messageId);
        if (!existingMessage) {
            return res.status(404).json({
                message: "Message not found"
            });
        }
        // Delete the message
        const deletedMessage = await Message.findByIdAndDelete(messageId);

        return res.status(200).json({
            message: "Message deleted successfully",
            data: deletedMessage
        });
    } 
    catch (error: any) {
        console.error(error);
        return res.status(500).json({
            message: error.message,
            code: error.code
        });
    }
}