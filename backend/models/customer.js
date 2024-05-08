//sample/server/models/customer.js
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const customerSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	Mobilenumber: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

customerSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.SocBsEXyAAoVChKl, {
		expiresIn: "7d",
	});
	return token;
};

const Customer = mongoose.model("customer", customerSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		Mobilenumber: Joi.string().required().label("Mobile Number"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = {Customer, validate };
