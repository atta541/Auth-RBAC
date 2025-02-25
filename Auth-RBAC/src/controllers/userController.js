const User = require("../models/User");
const bcrypt = require("bcrypt");

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};




const jwt = require("jsonwebtoken");

const sendVerificationEmail = require("../utils/sendEmail");

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const userRole = req.user && req.user.role === "admin" ? role : "user";
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, role: userRole });
    await newUser.save();

    // Generate verification token
    const token = jwt.sign({ id: newUser._id }, "your_jwt_secret", { expiresIn: "1d" });

    // Send verification email
    await sendVerificationEmail(email, token);

    res.status(201).json({ message: "User created. Check your email to verify your account." });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Invalid data" });
  }
};



// Get a user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// User login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    
    if (!user.isVerified) {
      return res.status(400).json({ error: "Email not verified. Check your inbox to verify your email."
      });
    }
    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT Token including role
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const loggedInUserId = req.user.id;
    const loggedInUserRole = req.user.role;

    if (loggedInUserId !== userId && loggedInUserRole !== "admin") {
      return res.status(403).json({ error: "Access denied. You can only view your own data." });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, "your_jwt_secret");

    const user = await User.findById(decoded.id);
    if (!user) return res.status(400).json({ error: "Invalid token" });

    if (user.isVerified) return res.status(400).json({ error: "Email already verified" });

    user.isVerified = true;
    await user.save();

    res.status(200).json({ message: "Email verified successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Invalid or expired token" });
  }
};

// module.exports = { createUser, verifyEmail, getUsers, getUser, loginUser };





module.exports = { getUsers, createUser, getUserById, deleteUser, loginUser, getUser ,verifyEmail};
