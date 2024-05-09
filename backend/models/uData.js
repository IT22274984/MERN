// models/UserModel.js
const mongoose = require('mongoose');

const schemaData = mongoose.Schema({
    color: String,
    size: String,
    add: String,
    quan: String,
}, {
    timestamps: true
});

module.exports  = mongoose.model("userProd", schemaData);
