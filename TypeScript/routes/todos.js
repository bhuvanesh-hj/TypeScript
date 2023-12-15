"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos, success: true });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ message: "Successfully added the todo to the list" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const { id } = req.body;
    const existTodo = todos.find((todo) => todo.id == id);
    if (!existTodo) {
        return res.status(404).json({ success: false, message: "Todo not found!" });
    }
    todos = todos.filter(todo => todo.id !== id);
    res.status(200).json({ success: true, message: "Successfully deleted." });
});
router.put("/todo/:todoId", (req, res, next) => {
    const { id, newText } = req.body;
    const existTodoIndex = todos.findIndex(todo => todo.id === id);
    if (existTodoIndex < 0) {
        return res.status(404).json({ success: false, message: "Todo not found." });
    }
    const newTodo = {
        id: id,
        text: newText
    };
    todos[existTodoIndex] = newTodo;
    res.status(200).json({ success: false, message: "Edited the todo" });
});
exports.default = router;
