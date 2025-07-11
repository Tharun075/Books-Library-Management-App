const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register new user
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,        
      sameSite: 'Lax'        
    });
    res.status(201).json({ msg: 'User created', token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Login user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,        
      sameSite: 'Lax'        
    });

    res.status(200).json({ msg: 'Logged in successfully', token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Logout user
const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: true,
    sameSite: 'Lax', 
  });
  res.status(200).json({ msg: 'Logged out successfully' });
};
// user info
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.status(200).json({ email: user.email });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { register, login, logout, getMe };
