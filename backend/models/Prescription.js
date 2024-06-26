//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\server\models\Prescription.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const prescriptionSchema = new Schema({
    Mobilenumber:{
        type:String,
        required:true
    },
    Sphere:{
        type:Number,
        required:true
    },
    Cylinder:{
        type:Number,
        required:true
    },
    Axis:{
        type:Number,
        required:true
    },
    PupilDistance:{
        type:Number,
        required:true
    },
    Lence:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    
});

module.exports= mongoose.model("Prescription",prescriptionSchema);

//prescriptions