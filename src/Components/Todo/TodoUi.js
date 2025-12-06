import React, { useState, useEffect } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const saveTask = localStorage.getItem("todo");
    if(saveTask){
      setTodo(JSON.parse(saveTask));
    }
  }, [])

  const addTodo = () => {
    if (task.trim() === "") return;
    const newTodo = [...todo, task];
    setTodo(newTodo)
    setTask("");

    localStorage.setItem("todo", JSON.stringify(newTodo));
    
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 mx-auto">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="text-center mb-4">Todo List</h3>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Add your task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button className="btn btn-primary" onClick={addTodo}>
                Add
              </button>
            </div>

            <ul className="list-group">
              {todo.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

