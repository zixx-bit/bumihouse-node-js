import asyncHandler from 'express-async-handler'

import { prisma } from '../config/prismaConfig.js'

export  const createUser = asyncHandler(async(req, res) => {
    console.log("createing a user");

    let {email} = req.body;

    const userExists = await prisma.user.findUnique({where: {email: email}})
    console.log(email)
     
});

