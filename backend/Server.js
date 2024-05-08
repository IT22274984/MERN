const express = require('express');
require('dotenv').config()
const app = express();
const taskRoutes = require("./routes/taskRoute");
const taskRout = require('./routes/cardRoute')
const faqRoute = require("./routes/faqRoute");
const payment = require('./routes/PaymentRoutes/PaymentRouter')
const router = require("./routes/optical_routes");
const mongoose = require('mongoose')
var cors = require('cors')

// Middleware
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    console.log('path' + req.path + 'method' + req.method);
    next();
})


//middleware
app.use((req, res, next) => {
  console.log("path" + req.path + "method" + req.method);
  next();
});

//db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("DB connected Successfully listening to " + process.env.PORT);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);
app.use("/api/faq", faqRoute);
app.use("/server/payment", payment)
app.use("/api/card", taskRout)
app.use("/opticals", router); // localhost:5000/opticals
