require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const doctorRoutes = require("./routes/users");
const uauthRoutes = require("./routes/uauth");
const customerRoutes = require("./routes/customers");
const cauthRoutes = require("./routes/cauth");
const router = require("./routes/prescription-routes");

// Database connection
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
try {
  mongoose.connect("mongodb+srv://admin:SocBsEXyAAoVChKl@cluster0.fs9jz1r.mongodb.net/Opticals?retryWrites=true&w=majority&appName=Cluster0", connectionParams);
  console.log("Connected to database successfully");
} catch (error) {
  console.log(error);
  console.log("Could not connect database!");
}

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/uauth", uauthRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cauth", cauthRoutes);
app.use("/prescriptions", router);

const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}...`));

