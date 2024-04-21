import User from '../../../database/models/user'


const createUser = async (body: any) => {
    return await User.create(body);
}

const getAllUsers = async () => {
    return await User.find()
}

const getUserById = async (id: string) => {
    return await User.findOne({_id: id});
}

const getUserByEmail = async (email: string) => {
    return await User.findOne({email})
}

const deleteUserById = async (id: string) => {
    return await User.deleteOne({_id: id});
}

export { createUser, getAllUsers, getUserById, deleteUserById, getUserByEmail }