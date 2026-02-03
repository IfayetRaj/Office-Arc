import jwt, { sign } from 'jsonwebtoken';

const  SECRET = process.env.JWT_SECRET || "bhoyanok";

export const signToken = (payload) =>{
    return jwt.sign(payload, SECRET, {expiresIn: '4h'});
}

export const verifyToken = (token) =>{
    return jwt.verify(token, SECRET);
}