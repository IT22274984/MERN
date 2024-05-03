const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const bookRoutes = require('./routes/bookroutes');
const bookModel = require('./models/bookmodel');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
bookModel.connectDB();

// Routes
app.use('/books', bookRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
