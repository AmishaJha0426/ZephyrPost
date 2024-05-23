const express=require('express');
const { test, updateUser, deleteUser } = require("../controllers/user.controller.js");
const { verifyToken } = require('../utils/verifyUser.js');
const router=express.Router();

router.get('/test', test);
router.put("/update/:userID", verifyToken, updateUser);
router.delete("/delete/:userID", verifyToken, deleteUser);




module.exports = router;