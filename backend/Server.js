const express = require('express');
require('dotenv').config()
const app = express();
const taskRout = require('./routes/cardRoute')
const payment = require('./routes/PaymentRoutes/PaymentRouter')
const mongoose = require('mongoose')
var cors = require('cors')

// Middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log('path' + req.path + 'method' + req.method);
    next();
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected successfully and listening to " + process.env.PORT);
        });
    })
    .catch((error) => console.log(error));

    app.use("/server/payment", payment)
    app.use("/api/card", taskRout)