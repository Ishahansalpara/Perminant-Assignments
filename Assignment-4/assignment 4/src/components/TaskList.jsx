import React, { useState } from 'react';

const TaskList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>📝 Task List</h2>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={addTask} style={{ padding: '0.5rem 1rem' }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              background: '#f0f0f0',
              marginBottom: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '0.3rem 0.6rem',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
