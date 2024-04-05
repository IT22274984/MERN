const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/optical_routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/opticals", router); // localhost:5000/opticals

mongoose
  .connect(
    "mongodb+srv://admin:BpmmMG8UUhzGzMSf@cluster0.130jkof.mongodb.net/shan_product?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
//BpmmMG8UUhzGzMSf