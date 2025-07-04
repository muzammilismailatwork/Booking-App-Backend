import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next)=>{
    res.send("hello user, you are logged in")
})

router.get("/checkuser/:id", verifyUser , (req, res, next)=>{
    res.send("hello user, you are logged in and you can delete your account!")
})

//Update

router.put("/:id", updateUser)

//Delete

router.delete("/:id", deleteUser)

// get single User
router.get("/:id", getUser)

// Get all Users
router.get("/", getUsers)

export default router