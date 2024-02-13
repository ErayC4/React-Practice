import React from "react";

function Todolist() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <div className="pl-16 pt-16">
      <p className="text-4xl">Todolist</p>
      <textarea
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border border-gray-900 mt-4 pl-2 w-64"
      />
      <button onClick={addTodo} className="block px-8 bg-yellow-300 mt-2">
        Add
      </button>

      <ul>
      {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
