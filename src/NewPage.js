import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from './TaskContext';

function NewPage() {
  const { addTask } = useContext(TaskContext);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Task</h3>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <button type="submit">Create Task</button>
    </form>
  );
}

export default NewPage;
