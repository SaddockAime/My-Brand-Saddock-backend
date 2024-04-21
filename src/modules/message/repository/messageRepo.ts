import Message from '../../../database/models/messages'


const createMessages = async (body: any) => {
    return await Message.create(body);
}

const getAllMessages = async () => {
    return await Message.find()
}

const getMessageById = async (id: string) => {
    return await Message.findOne({_id: id});
}

const deleteMessageById = async (id: string) => {
    return await Message.deleteOne({_id: id});
}

export { createMessages, getAllMessages, getMessageById, deleteMessageById }