const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const todoController = require("./controllers/todoController");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// port
const PORT = process.env.PORT || 8000;

// Call the connectDB function to connect to MongoDB
connectDB();
app.use(cors());
// ... Other server setup and routes
app.use("/todo", todoController);

// middleware
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
