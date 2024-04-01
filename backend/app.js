const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/prescription-routes");
const cors = require("cors");
const app =express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/prescription",router);

mongoose.connect("mongodb+srv://admin:SocBsEXyAAoVChKl@cluster0.fs9jz1r.mongodb.net/Opticals?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected To Database"))
.then(()=>{
    app.listen(5000);}).catch((err)=>console.log(err));
//SocBsEXyAAoVChKl

