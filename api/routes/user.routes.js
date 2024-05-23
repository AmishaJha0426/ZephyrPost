const express=require('express');
const { test, updateUser, deleteUser, signout } = require("../controllers/user.controller.js");
const { verifyToken } = require('../utils/verifyUser.js');
const router=express.Router();

router.get('/test', test);
router.put("/update/:userID", verifyToken, updateUser);
router.delete("/delete/:userID", verifyToken, deleteUser);
router.post("/signout", signout);





module.exports = router;