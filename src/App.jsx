import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const newEntry = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    if (text.trim() === "") return;
    setTasks([...tasks, text]);
    setText("");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(index) {
    console.log("Delete button clicked for ", index);
    setTasks(tasks.filter((task, i) => i !== index));
  }

  function clearList() {
    setTasks([]);
  }

  return (
    
    <div className=" container">
      <div className="header">
        <h1>To Do List</h1>

        <hr id="main" />
      </div>
      <div className="tasklist">
        <p>Tasks<br/></p>
        <hr id="second" />
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {" "}
              {task}{" "}
              <button id="delete" onClick={() => deleteTask(index)}>
                X
              </button>
            </li>
          ))}
        </ul>

        <button id="clear" onClick={clearList}>
          Clear
        </button>
        
      </div>
      <div className="inputbox">
        <hr id="main" />
        <label>
          Enter task
          <br />
          <input type="text" value={text} onChange={newEntry} />
        </label>
        <button id="add" onClick={addTask}>Add</button>
      </div>
    </div>
    
  );
}

export default App;
