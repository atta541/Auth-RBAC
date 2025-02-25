const express = require("express");
const { getUsers, createUser, getUser, loginUser } = require("../controllers/userController");
const auth = require("../middleware/auth");
const checkRole = require("../middleware/role");
const { verifyEmail } = require("../controllers/userController");


const router = express.Router();

// Public Routes
router.post("/register", createUser);
router.post("/login", loginUser);
// Protected Routes
router.get("/", auth, checkRole(["admin"]), getUsers); 
router.get("/:id", auth, getUser); 
router.get("/verify-email/:token", verifyEmail);


module.exports = router;
