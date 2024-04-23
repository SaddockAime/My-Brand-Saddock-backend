import express from 'express'
import { comparePassword, encryptPassword, generateToken } from '../../../helpers'
import { createUser, getAllUsers, getUserByEmail , getUserById, deleteUserById} from '../repository/userRepo'


//Login
export const login = async (req: express.Request, res: express.Response) => {
    try{
        const { email, password } = req.body;
        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'no user'
            });
        }
        const isPasswordMatch = await comparePassword(password, user.password);
        if(!isPasswordMatch){
            return res.status(404).json({
                status: 'fail',
                message: 'Wrong password'
            });
        }
        const token = generateToken(user._id);
          return res.status(200).json({
            status: 'success',
            data: {
                user,
                token
            },
        });
    } catch(error: any) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message             
        })
    }
}


//signup
export const signup = async (req: express.Request, res: express.Response) => {
    //console.log("hello my people")
    try {
        const { username, email, password} = req.body;
        if ( !username || !email || !password){
            return res.status(404).json({
                status: 'fail',
                message: 'insert user credentials'
            });
        }
        const existingUser = await getUserByEmail(email);
        //console.log(existingUser)
        if (existingUser) {
            return res.status(404).json({
                status: 'fail',
                message: 'user already exists'
            });
        }
        const hashedPassword = await encryptPassword(password);
        const user = await createUser({
            username,
            email,
            password: hashedPassword,
        });
        return res.status(200).json({
            status: 'success',
            data: user
        });
    } catch(error: any) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message             
        })
    }
}


//view all users
export const viewUsers = async (req: express.Request, res: express.Response) => {
    try {
        const allUsers = await getAllUsers()
        if(! allUsers || allUsers.length === 0) {
            return res.status(404).json({
                message: "Allusers were not found"
            })
        }
        return res.status(200).json({
            message: "All Users successfully found",
            data: allUsers
        })
    }
    catch(error: any){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message             
        })
    }
}


// delete users
export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const userId = req.params.id; 
        // Check if the user exists
        const existingUser = await getUserById(userId);
        if (!existingUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const deletedUser = await deleteUserById(userId);
        return res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });
    } 
    catch (error: any) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}


