//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\server\index.js
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const uauthRoutes = require("./routes/uauth");
const customerRoutes = require("./routes/customers");
const cauthRoutes = require("./routes/cauth");
const router = require("./routes/prescription-routes");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/uauth", uauthRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/cauth", cauthRoutes);
app.use("/prescriptions",router);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
