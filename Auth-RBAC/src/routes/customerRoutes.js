const express = require("express");
const { createCustomer, deleteCustomer,customer,updateCustomer} = require("../controllers/customerController");

const router = express.Router();

router.post("/", createCustomer);
router.delete("/:id", deleteCustomer);
router.get("/:id",customer)
router.put("/:id", updateCustomer);

module.exports = router;