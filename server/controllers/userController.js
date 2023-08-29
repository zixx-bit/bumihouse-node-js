import asyncHandler from 'express-async-handler'

import { prisma } from '../config/prismaConfig.js'

export  const createUser = asyncHandler(async(req, res) => {
    console.log("creating a user");

    let {email} = req.body;

    const userExists = await prisma.user.findUnique({where: {email: email}})
    if(!userExists){
        const user = await prisma.user.create({data: req.body});
        res.send({
            message: "user registered successfully",
            user: user
        });
    }else res.status(201).send({message: 'User already registered'})  
     console.log(email)     
});

export const bookVisit = asyncHandler(async(req, res)=>{
    const {email, date} = req.body
    const {id} = req.params

    try {
        
    } catch (err) {
        throw new Error(err.message)
        
    }
})

