import jwt from 'jsonwebtoken'
import { encryptPassword, comparePassword } from './passwordhelpers';

const JWT_KEY = process.env.JWT_KEY || 'SECRET';

const generateToken = (userId: any): any => {
    const token = jwt.sign({userId}, JWT_KEY, {expiresIn: '12h'});
    return token;
}

export { generateToken, encryptPassword, comparePassword }
