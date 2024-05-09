const express = require('express');
require('dotenv').config()
const app = express();
const taskRoutes = require("./routes/taskRoute");
const taskRout = require('./routes/cardRoute')
const faqRoute = require("./routes/faqRoute");
const payment = require('./routes/PaymentRoutes/PaymentRouter')
const router = require("./routes/optical_routes");
const userRoutes = require("./routes/uRoutes")
const userRou = require("./routes/userRoutes")
const doctorRoutes = require("./routes/users");
const uauthRoutes = require("./routes/uauth");
const customerRoutes = require("./routes/customers");
const cauthRoutes = require("./routes/cauth");
const prescriptionRouter = require("./routes/prescription-routes");
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
app.use('/Appoinments', require('./routes/appoinmentRoutes'));
app.use("/opticals", router); // localhost:5000/opticals
app.use("/users",userRoutes);
app.use("/userMail",userRou)
app.use("/api/doctors", doctorRoutes);
app.use("/api/uauth", uauthRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cauth", cauthRoutes);
app.use("/prescriptions", prescriptionRouter);
