// app.js

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Set up your routes
app.use('/', require('./routes/appoinmentRoutes'));

const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
