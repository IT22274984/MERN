
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/uRoutes")
const userRou = require("./routes/userRoutes")

app.use(express.json());

app.use(cors());
app.use("/users",userRoutes);
app.use("/userMail",userRou)

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb+srv://Admin:Admin@asho.eq3weks.mongodb.net/?retryWrites=true&w=majority ", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected successfully to MongoDB");
        // Start the server
        app.listen(PORT, () => {
            console.log("Server is running on port " + PORT);
        });
    })
    .catch((error) => console.error("Error connecting to MongoDB:", error));
module.exports = app;

