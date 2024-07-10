const express = require('express');
const router = express.Router();
const User = require('../../models/userSchema.js'); // Adjust the path as needed

// Signup route
router.post('/signup', async (req, res) => {
  try {
    // Create a new user
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});


// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the password matches (you should compare hashed passwords)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials, Password NOT MATCHED' });
    }
    // Generate a token (you can use libraries like jsonwebtoken)
    const token = 'your_generated_token_here';

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
