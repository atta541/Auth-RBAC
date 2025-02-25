const express = require("express");
const userRoutes = require("./routes/userRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes); 
app.use("/api/customer",customerRoutes); 

module.exports = app;
