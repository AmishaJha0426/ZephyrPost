const express = require("express");
const { verifyToken } = require("../utils/verifyUser.js");
const router = express.Router();
const { createComment } = require("../controllers/comment.controller.js");

router.post("/create", verifyToken, createComment);


module.exports = router;
