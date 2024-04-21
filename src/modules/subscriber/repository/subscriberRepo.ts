import Subscriber from "../../../database/models/subscribers";


const createSubscribers = async (body: any) => {
    return await Subscriber.create(body);
}

const getAllSubscribers = async () => {
    return await Subscriber.find()
}

export { createSubscribers, getAllSubscribers}