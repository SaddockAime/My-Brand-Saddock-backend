import express from 'express'
import bcrypt from 'bcrypt'
import User from '../modules/user'
import jwt from "jsonwebtoken"



//Login
export const login = async (req: express.Request, res: express.Response) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne({email: email})

        if (!user) {
            return res.status(400).json({
                status: 'fail',
                message: 'no user'
            });
        }

        const password_match = await bcrypt.compare(password, user.password)


        if(!password_match){
            return res.status(400).json({
                status: 'fail',
                message: 'Wrong password'
            });
        }


        // const token = await jwt.sign({isOwner: user.isOwner}, process.env.SECRET_KEY)


          return res.status(200).json({
            status: 'success',
            data: user
        });
   



    } catch(error: any) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            code: error.code,             
        })
    }
}


//signup
export const signup = async (req: express.Request, res: express.Response) => {
    //console.log("hello my people")
    try {
        const { username, email, password} = req.body;
        if ( !username || !email || !password){
            return res.status(400).json({
                status: 'fail',
                message: 'insert user credentials'
            });
        }

        let isOwner = false

            const thereAreUsers = await User.find()
        
            if(!thereAreUsers){
                isOwner = true;
            }

        // const existingUser = await User.findOne({email: email});

        // //console.log(existingUser)

        // if (existingUser) {
        //     return res.status(400).json({
        //         status: 'fail',
        //         message: 'user already exists'
        //     });
        // }


        // hash to password
        const hashed_password = await bcrypt.hash(password, 10)
    
        const user = await User.create({
            username,
            email,
            password: hashed_password,
            isOwner
        });


        return res.status(200).json({
            status: 'success',
            data: user
        });


    } catch(error: any) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
            code: error.code,             
        })
    }
}


//view all users
export const viewUsers = async (req: express.Request, res: express.Response) => {

    try {
        const allUsers =await User.find().maxTimeMS(50000)
        
        return res.status(200).json({
            message: "All Users successfully found",
            data: allUsers
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


