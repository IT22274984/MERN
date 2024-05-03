
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes")


app.use(express.json());

app.use(cors());
app.use("/users",userRoutes);

const PORT = process.env.PORT || 4000;

mongoose.connect("mongodb://localhost:27017/crudoperation")
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => console.log("Server is running"));
    })
    .catch((err) => console.log(err));

module.exports = app;