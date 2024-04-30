//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\server\db.js
const mongoose = require("mongoose");

module.exports = () => {
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
};

