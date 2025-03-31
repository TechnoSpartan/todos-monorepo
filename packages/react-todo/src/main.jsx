import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ margin: "20px" }}>
      <h1>React Todo</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
