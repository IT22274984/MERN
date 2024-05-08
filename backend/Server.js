const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes")

app.use(express.json());

app.use(cors());
app.use("/users",userRoutes)

const PORT = process.env.PORT || 5000;
const MONGO_URI = "mongodb://localhost:27017/crud"; 

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected successfully to MongoDB");
        // Start the server
        app.listen(PORT, () => {
            console.log("Server is running on port " + PORT);
        });
    })
    .catch((error) => console.error("Error connecting to MongoDB:", error));

module.exports = app;
