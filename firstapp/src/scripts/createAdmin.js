require("dotenv").config({ path: "../.env" }); 
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const createInitialAdmin = async () => {
  try {
    console.log("DB_URL:", process.env.DB_URL);
    await mongoose.connect(process.env.DB_URL);
    const name = process.env.ADMIN_NAME;
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;

    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      console.log("Admin already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new User({ name: name, email, password: hashedPassword, role: "admin" });
    await admin.save();

    console.log("Initial admin created successfully.");
    process.exit();
  } catch (err) {
    console.error("Error creating admin:", err);
    process.exit(1);
  }
};

createInitialAdmin();