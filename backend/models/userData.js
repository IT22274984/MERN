const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
    user_name: String,
    user_email: String,
    message: String,
}, {
    timestamps: true
});
 
module.exports = mongoose.model("UserMail", userSchema);