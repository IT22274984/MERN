
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const staffPaymentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    selectedCard: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now, // Default value will be the current date and time
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("staffPaymentDetails", staffPaymentSchema);