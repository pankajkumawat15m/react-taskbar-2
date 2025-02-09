import React, { useState } from "react";
import "./App.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ heading: "", username: "", description: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addTask = () => {
    if (!formData.heading || !formData.username || !formData.description) return;
    setTasks((prevTasks) => [...prevTasks, { ...formData, id: prevTasks.length + 1 }]);
    setFormData({ heading: "", username: "", description: "" });
    setTimeout(() => setShowForm(false), 100);
  };

  return (
    <div className="todo-container">
      
      <div className="task-button-container">
        <button className="add-task-button" onClick={() => setShowForm(true)}>
          Add Task
        </button>
      </div>

      
      {showForm && (
        <div className="task-form">
          <h2 className="form-title">New Task</h2>
          <div className="form-group">
            <input type="text" name="heading" placeholder="Task Heading" value={formData.heading} onChange={handleChange} className="form-input" />
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="form-input" />
            <textarea name="description" placeholder="Task Description" value={formData.description} onChange={handleChange} className="form-textarea"></textarea>
            <button className="submit-task-button" onClick={addTask}>Submit Task</button>
          </div>
        </div>
      )}

      
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-task-message">No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => (
            <div key={task.id} className="task-box">
              <h2 className="task-title">Task {index + 1}</h2>
              <p className="task-heading">{task.heading}</p>
              <p className="task-username">Username: {task.username}</p>
              <p className="task-description">{task.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList;

