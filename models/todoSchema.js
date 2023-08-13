// Import required packages
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create a new schema for todo-list
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

// Create a model using the schema
const Todo = mongoose.model("Todo", todoSchema);

// Export the model
module.exports = Todo;
