//C:\Users\shant\OneDrive\Desktop\sampleProject\sample\server\routes\customers.js
const router = require("express").Router();
const { Customer, validate } = require("../models/customer");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const customer = await Customer.findOne({ email: req.body.email });
		if (customer)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new Customer({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});
router.get("/search/:mobileNumber", async (req, res) => {
    try {
        const mobileNumber = req.params.mobileNumber;
        const customers = await Customer.find({
            Mobilenumber: { $regex: mobileNumber, $options: "i" }
        });
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
