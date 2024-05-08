
const staffPaymentDetails = require('../../models/paymentModel/paymentModule.js')
exports.CreateDetails = async (req, res) => {
    const { name, email, amount, selectedCard } = req.body;
  
    try {
        const newDetails = new staffPaymentDetails({
            name,
            email,
            amount,
            selectedCard,
            date: new Date() // Adding the current date and time
        });

        await newDetails.save();
        res.status(201).json({ message: "Details created successfully", data: newDetails });
    } catch (error) {
        console.error("Error creating details:", error);
        res.status(500).json({ message: "Failed to create details" });
    }
};

// Read all details
exports.getAllDetails = async (req, res) => {
    try {
        const allDetails = await staffPaymentDetails.find();
        if (!allDetails || allDetails.length === 0) {
            return res.status(404).json({ message: "No details found" });
        }
        res.json({ message: "Details found", data: allDetails });
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ message: "Failed to fetch details" });
    }
};

// Read details by ID
exports.getOneDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const oneDetails = await staffPaymentDetails.findById(id);
        if (!oneDetails) {
            return res.status(404).json({ message: "Details not found" });
        }
        res.json({ message: "Details found", data: oneDetails });
    } catch (error) {
        console.error("Error fetching details:", error);
        res.status(500).json({ message: "Failed to fetch details" });
    }
};

// Update details by ID
exports.updateDetailsById = async (req, res) => {
    const { id } = req.params;
    const { name, email, amount, selectedCard } = req.body;

    try {
        const updatedDetails = await staffPaymentDetails.findByIdAndUpdate(id, {
            name,
            email,
            amount,
            selectedCard
        }, { new: true });

        if (!updatedDetails) {
            return res.status(404).json({ message: "Details not found" });
        }
        res.json({ message: "Details updated successfully", data: updatedDetails });
    } catch (error) {
        console.error("Error updating details:", error);
        res.status(500).json({ message: "Failed to update details" });
    }
};

// Delete details by ID
exports.deleteDetailsById = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedDetails = await staffPaymentDetails.findByIdAndDelete(id);
        if (!deletedDetails) {
            return res.status(404).json({ message: "Details not found" });
        }
        res.json({ message: "Details deleted successfully", data: deletedDetails });
    } catch (error) {
        console.error("Error deleting details:", error);
        res.status(500).json({ message: "Failed to delete details" });
    }
};
