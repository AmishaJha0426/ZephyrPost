const express=require('express');
const { test, updateUser, deleteUser, signout, getUsers } = require("../controllers/user.controller.js");
const { verifyToken } = require('../utils/verifyUser.js');
const router=express.Router();

router.get('/test', test);
router.put("/update/:userID", verifyToken, updateUser);
router.delete("/delete/:userID", verifyToken, deleteUser);
router.post("/signout", signout);
router.get("/getusers",verifyToken,getUsers);





module.exports = router;