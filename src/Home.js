import React, { useContext, useState, useEffect } from 'react';
import { TaskContext } from './TaskContext';

function Home() {
  const { tasks, editTask, deleteTask } = useContext(TaskContext);  // Access tasks from context
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({ name: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setCurrentTask(tasks[index]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingIndex(null);
    setCurrentTask({ name: '', description: '' });
  };

  const handleSubmit = () => {
    editTask(editingIndex, currentTask);
    handleClose();
  };

  return (
    <div>
      {Array.isArray(tasks) && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div key={index}>
            <p>Name: {task.name}</p>
            <p>Description: {task.description}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No tasks available.</p>
      )}

      {open && (
        <div>
          <h3>Edit Task</h3>
          <input
            type="text"
            value={currentTask.name}
            onChange={(e) => setCurrentTask({ ...currentTask, name: e.target.value })}
          />
          <input
            type="text"
            value={currentTask.description}
            onChange={(e) => setCurrentTask({ ...currentTask, description: e.target.value })}
          />
          <button onClick={handleSubmit}>Save</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default Home;
