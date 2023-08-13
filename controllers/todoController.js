// Import required modules
const express = require("express");

// Create router
const router = express.Router();
const {
  deleteTodo,
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodo,
} = require("../services/todoService");
// Define routes and their corresponding CRUD operations

// GET route - Read operation
router.get("/", getAllTodo);

// GET route - Read operation for a specific resource
router.get("/:id", getTodoById);

// POST route - Create operation
router.post("/", createTodo);

// PUT route - Update operation
router.put("/:id", updateTodo);

// DELETE route - Delete operation
router.delete("/:id", deleteTodo);

// Export the router
module.exports = router;
