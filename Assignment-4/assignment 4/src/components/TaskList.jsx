import React, { useState } from 'react';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    setTasks(prev => [...prev, task.trim()]);
    setTask('');
  };

  const deleteTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={e => setTask(e.target.value)}
        style={{ padding: 6, marginRight: 8 }}
      />
      <button onClick={addTask}>Add Task</button>
      <ul style={{ marginTop: 15 }}>
        {tasks.map((t, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            {t}
            <button
              onClick={() => deleteTask(i)}
              style={{
                marginLeft: 10,
                padding: '2px 6px',
                backgroundColor: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
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
