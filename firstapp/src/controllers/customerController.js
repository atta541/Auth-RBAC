const Customer = require("../models/Customer");

const createCustomer = async (req, res) => {
    try {
        const { name, address } = req.body;
        const newCustomer = new Customer({ name, address });
        await newCustomer.save();
        res.status(201).json(newCustomer);

    } catch (error) {
        res.status(400).json({ error: "Invalid data" });

    }
}

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCusomter = await Customer.findByIdAndDelete(id);
        if (!deletedCusomter) {
            return res.status(404).json({ error: "Customer not found" });
        }
        res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: "Invalid data" });
    }
}


const customer = async (req, res) => {
    try {
        const { id } = req.params;
        const findcustomer = await Customer.findById(id);
        if (!findcustomer) {
            res.status(404).json({ error: "Customer not found" });
        }

        res.status(200).json(findcustomer);

    }
    catch (error) {
        res.status(400).json({ error: "Invalid data" });
    }

}

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address } = req.body;
        const updatedCustomer = await Customer.findByIdAndUpdate(id, { name, address }, { new: true });
        if (!updatedCustomer) {
            return res.status(404).json({ error: "Customer not found" });
        }
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(400).json({ error: "Invalid data" });
    }
}

module.exports = { createCustomer, deleteCustomer, customer,updateCustomer };