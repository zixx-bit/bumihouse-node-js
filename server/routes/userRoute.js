 import express from 'express'
 import {bookVisit, createUser, getAllBooking } from '../controllers/userController.js'

 const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings/:id", getAllBooking)

export {router as userRoute}