const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const opticalSchema = new Schema({
    name:{
        type: String,
        reequired:true
    },
    description:{
        type: String,
        reequired:true
    },
    price:{
        type: Number,
        reequired:true
    },
    available:{
        type: Boolean,
       
    },
    additional_information:{
        type: String,
        reequired:true
    },
    image:{
        type:String,
        reequired:true,
    },
});
module.exports = mongoose.model("optical",opticalSchema);
//opticals