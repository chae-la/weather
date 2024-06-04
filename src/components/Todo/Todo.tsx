import "./Todo.scss";
import { TodoType } from "../../types/TodoType";
import { useState } from "react";
import Button from "../Button/Button";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (task.trim().length === 0) {
      alert("Please enter a value!");
      return;
    }

    const todo: TodoType = {
      id: Date.now(),
      title: task,
      isComplete: false,
    };

    setTodos([todo, ...todos]);
    setTask("");
  };

  const handleCompleteTask = (todo: TodoType) => {
    const taskIndex = todos.indexOf(todo);
    todo.isComplete = !todo.isComplete;
    todos.splice(taskIndex, 1, todo);
    setTodos([...todos]);
  };

  const handleDeleteTask = (id: number) => {
    const taskIndex = todos.findIndex((todo) => todo.id === id);
    todos.splice(taskIndex, 1);
    setTodos([...todos]);
  };

  return (
    <div className="todo">
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleInput} placeholder="Enter A Task..." />
        <Button label="+" variant="secondary" />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => handleCompleteTask}
            />
            <Button
              label="X"
              variant={"secondary"}
              onClick={() => handleDeleteTask(todo.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;