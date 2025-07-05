import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/", verifyAdmin, createHotel)

//Update

router.put("/:id",verifyAdmin, updateHotel)

//Delete

router.delete("/:id",verifyAdmin, deleteHotel)

// get single hotel
router.get("/:id", getHotel)

// Get all hotels
router.get("/", getHotels)

export default router