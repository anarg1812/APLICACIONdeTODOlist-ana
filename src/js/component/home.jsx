import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Mi Lista</h1>
      <ul>
        <li>
          <input
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            onKeyPress={handleKeyPress}
            placeholder="lista"
          />
        </li>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <i
              className="far fa-trash-alt icon"
              onClick={() => handleDeleteTask(index)}
              style={{ cursor: "pointer" }}
            ></i>
          </li>
        ))}
      </ul>
      <div>{todos.length} tareas</div>
    </div>
  );
};

export default Home;