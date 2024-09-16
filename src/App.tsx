import React, { useState } from 'react';
import './App.css'; // CSS faylni import qilamiz

type Todo = {
  id: number;
  text: string;
};

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
    };
    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">Todo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Add a new todo..."
        />
        <button
          onClick={handleAddTodo}
          className="todo-button"
        >
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="todo-delete"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
