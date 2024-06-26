//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\server\models\user.js
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const doctorSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

doctorSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.SocBsEXyAAoVChKl, {
		expiresIn: "7d",
	});
	return token;
};

const Doctor = mongoose.model("doctor", doctorSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = {Doctor, validate };
