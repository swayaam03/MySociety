    const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Society = require("../models/Society");

const router = express.Router();


// REGISTER USER API
router.post("/register", async (req, res) => {
  try {

    const { name, email, phone, password, societyId } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      societyId
    });

    await user.save();

    const token = jwt.sign(
  { id: user._id, role: user.role, societyId: user.societyId },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

res.status(201).json({
  message: "User registered successfully",
  token
});


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// LOGIN API
router.post("/login", async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role, societyId: user.societyId },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
