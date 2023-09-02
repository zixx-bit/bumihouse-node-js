 import express from 'express'
 import {bookVisit, cancelBooking, createUser, favResidency, getAllBooking } from '../controllers/userController.js'

 const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings", getAllBooking)
router.post("/removeBooking/:id", cancelBooking)
router.post("/favouriteResidency/:rid", favResidency)
router.post("/allFavResidencies", allFavresidencies)

export {router as userRoute}