import "./Todo.scss";
import { TodoType } from "../../types/TodoType";
import { useState } from "react";
import Button from "../Button/Button";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [task, setTask] = useState<string>("");

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

  const handleCompleteTask = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    ));
  };

  const handleDeleteTask = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const today = new Date();
  const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const currentDate = date + "/" + month + "/" + year;
  return (
    <div className="todo">
      <form onSubmit={handleFormSubmit} className="todo__form">
        <input type="text" onChange={handleInput} placeholder="Enter A Task..." className="todo__input" value={task}/>
        <Button label="+" variant="secondary" />
      </form>
      <p className="todo__title">{currentDate}</p>
      <ul className="todo__list">
        {todos.map((todo) => (
            <li key={todo.id} className={`todo__item ${todo.isComplete ? 'todo__item--complete' : ''}`}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => handleCompleteTask(todo.id)}
              className="todo__check"
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