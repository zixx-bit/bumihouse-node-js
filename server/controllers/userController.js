import asyncHandler from 'express-async-handler'

import { prisma } from '../config/prismaConfig.js'

export  const createUser = asyncHandler(async(req, res) => {
    console.log("creating a user");

    let {email} = req.body;

    const userExists = await prisma.user.findUnique({
        where: {email: email
        }})
    if(!userExists){
        const user = await prisma.user.create({data: req.body});
        res.send({
            message: "user registered successfully",
            user: user
        });
    }else res.status(201).send({message: 'User already registered'})  
     console.log(email)     
});
 
// function for creating a booking 
export const bookVisit = asyncHandler(async(req, res)=>{
    const {email, date} = req.body
    const {id} = req.params

    try {
        const alreadyBooked = await prisma.user.findUnique({
            where: {email: email}, 
            select: {bookedVisits: true}
        })

        if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)){
            res.status(400).json({message: "This residency is already booked by you"})
        }else{
            await prisma.user.update({
                where: {email: email},
                data : {
                    bookedVisits: {push: {id: id, date: date}} 
                }
            })
        } 
        res.send("Your visit is booked succesffully")
        
    } catch (err) {
        throw new Error(err.message)
        
    }
})

// function get all booking of a user
 export const getAllBooking = asyncHandler(async(req, res) =>{
    const {email} = req.body
    try {
        const bookings = await prisma.user.findUnique({
            where : {email: email},
            select: {bookedVisits: true}
        })
        res.status(200).send(bookings)
        
    } catch (err) {
        throw new Error(err.message)
        
    }
 })


//  function to cancel a booking
export const cancelBooking = asyncHandler(async(req, res) =>{
    const {email}  = req.body;
    const{id} = req.params
    try {
        const user = await prisma.user.findUnique({
            where : {email : email},
            select: {bookedVisits: true}
        }) 

        const index = user.bookedVisits.findIndex((visit) => visit.id === id);

        if (index === -1) {
            res.status(404).json({message: "Booking not found"})
           
        }else{
            user.bookedVisits.splice(index, 1)
            await prisma.user.update({
                where: {email : email},
                data: {
                    bookedVisits: user.bookedVisits
                }
            })
            res.send("Booking cancelled successfully")
        }

        
    } catch (err) {
        throw new Error(err.message)
        
    }
})

// function to add a residency in favourite list

export const favouriteResidency = asyncHandler(async(req, res) => {
    const {email}  = req.body;
    const {rid}  = req.params;

    try {
        const user = await prisma.user.findUnique({
            where: {email: email}
        })
        if (user.favResidencesID.includes(rid)) {
            
        }
        
    } catch (err) {
        throw new Error(err.message)
    }
} )


