const mongoose = require('mongoose')

const Schema = mongoose.Schema
const CardSchema = new Schema(
    {
        cardNum: {
            type: Number,
            required: true
        },
        holderName: {
            type: String,
            required: true
        },
        cardType: {
            type: String,
            enum: ['visa', 'master'], // Restrict to only 'visa' or 'master'
            required: true
        },
        exDate: {
            type: Date,
            required: true
        },
        cvv: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Card", CardSchema)