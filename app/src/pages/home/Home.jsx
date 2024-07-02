import React, { useState } from 'react';
import './home.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');

  const addTask = () => {
    if (newTask && newDate) {
      setTasks([...tasks, { task: newTask, date: newDate }]);
      setNewTask('');
      setNewDate('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="todo-container">
        <h1>To Do List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="New Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <div className="task-list">
          {tasks.map((item, index) => (
            <div key={index} className="task-item">
              <span>{item.task}</span>
              <span>{item.date}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
