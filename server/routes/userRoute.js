 import express from 'express'
 import {allFavResidencies, bookVisit, cancelBooking, createUser, favResidency, getAllBooking } from '../controllers/userController.js'
import jwtCheck from '../config/auth0Config.js';

 const router = express.Router();

router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.get("/allBookings", getAllBooking)
router.post("/removeBooking/:id", cancelBooking)
router.post("/favouriteResidency/:rid", favResidency)
router.post("/allFavResidencies", allFavResidencies)

export {router as userRoute}