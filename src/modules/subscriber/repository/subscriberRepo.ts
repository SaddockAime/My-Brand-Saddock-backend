import Subscriber from "../../../database/models/subscribers";


const createSubscribers = async (body: any) => {
    return await Subscriber.create(body);
}

const getAllSubscribers = async () => {
    return await Subscriber.find()
}

const getSubscriberByEmail = async (email: any) => {
    return await Subscriber.findOne({email})
}

const getSubscriberById = async (id: string) => {
    return await Subscriber.findOne({_id: id});
}

const deleteSubscriberById = async (id: string) => {
    return await Subscriber.deleteOne({_id: id});
}

export { createSubscribers, getAllSubscribers,  getSubscriberByEmail, deleteSubscriberById, getSubscriberById }