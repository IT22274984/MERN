const mongoose = require('mongoose');

const appoinmentSchema = new mongoose.Schema({
    appoinmentno:{
        type: Number,
        required: true,
        unique: true,
    },
    fullname:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Patient',
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    doctorname:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
      },
    location: {
        type: String,
        required: true,
      },
    condition:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Appoinment', appoinmentSchema);
