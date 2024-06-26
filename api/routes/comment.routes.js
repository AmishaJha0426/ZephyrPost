const express = require("express");
const { verifyToken } = require("../utils/verifyUser.js");
const router = express.Router();
const { createComment, getPostComments, likeComment, editComment, deleteComment, getComments } = require("../controllers/comment.controller.js");

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/like/:commentId", verifyToken, likeComment);
router.put("/edit/:commentId", verifyToken, editComment);
router.delete("/delete/:commentId", verifyToken, deleteComment);
router.get("/getcomments", verifyToken,getComments);




module.exports = router;
