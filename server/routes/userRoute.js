 import express from 'express'
 import {allFavResidencies, bookVisit, cancelBooking, createUser, favResidency, getAllBooking } from '../controllers/userController.js'
import jwtCheck from '../config/auth0Config.js';

 const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id",jwtCheck, bookVisit);
router.post("/allBookings", getAllBooking)
router.post("/removeBooking/:id",jwtCheck, cancelBooking)
router.post("/favouriteResidency/:rid",jwtCheck, favResidency)
router.post("/allFavResidencies",jwtCheck, allFavResidencies)

export {router as userRoute}