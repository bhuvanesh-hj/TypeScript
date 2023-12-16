import { Router } from "express";
import { Todo } from "../models/todo";

const router = Router();

let todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos, success: true });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };

  todos.push(newTodo);

  res.status(200).json({message:"Successfully added the todo to the list"})
});

router.delete("/todo/:todoId",(req, res, next)=>{
  const { id } = req.body;
  
  const existTodo = todos.find((todo)=> todo.id==id);

  if(!existTodo) {
    return res.status(404).json({success: false,message:"Todo not found!"});
  }

  todos = todos.filter(todo => todo.id !== id);

  res.status(200).json({success: true, message:"Successfully deleted."})
})

router.put("/todo/:todoId",(req, res, next)=>{
  const  { id, newText } = req.body;

  const existTodoIndex = todos.findIndex(todo => todo.id===id);
  
  if(existTodoIndex<0) {
    return res.status(404).json({success:false, message:"Todo not found."})
  }

  const newTodo = {
    id: id,
    text: newText
  }

  todos[existTodoIndex] = newTodo;

  res.status(200).json({success: false, message:"Edited the todo"})

})

export default router;
