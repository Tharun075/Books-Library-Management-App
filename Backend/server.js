const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.FE_URL, credentials: true }));


app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);  


connectDB()
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
