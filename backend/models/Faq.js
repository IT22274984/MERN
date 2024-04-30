const { Schema, model } = require('mongoose');

const faqSchema = new Schema({
    summary: { type: String, required: true },
    info: { type: String, required: true },
})

module.exports = model('Faq', faqSchema);
