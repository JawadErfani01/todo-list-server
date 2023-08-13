const Todo = require("../models/todoSchema");
const asyncHandler = require("express-async-handler");
// Get all Todo
const getAllTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.find();
  res.status(200).json(todo);
});

const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.status(200).json(todo);
});

// Create a new Todo
const createTodo = asyncHandler(async (req, res) => {
  if (!req.body) {
    throw new Error("title is required");
  }
  const newTodo = await Todo.create({
    title: req.body.title,
    id: req.body.id,
  });
  res.status(201).json(newTodo);
});

// Update an existing Todo
const updateTodo = asyncHandler(async (req, res) => {
  const todoID = await Todo.findById(req.params.id);
  if (!todoID) {
    res.status(404);
    throw new Error("todo not found");
  }
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title },
    { new: true }
  );

  return res.status(200).json(todo);
});

// Delete a Todo
const deleteTodo = asyncHandler(async (req, res) => {
  const todoID = await Todo.findById(req.params.id);
  if (!todoID) {
    res.status(404);
    throw new Error("todo not found");
  }
  await Todo.findByIdAndDelete(todoID);
  res.status(200).json(todoID + "this todo deleted");
});

module.exports = {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
