import React, { useState } from 'react';
import axios from 'axios';
import '../styles/TaskCard.css';

function TaskCard({ task, onDelete, onUpdate, token }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(task);
  const API_URL = process.env.https://deknek-tasks-api.onrender.com || 'http://localhost:5000';

  const handleToggleComplete = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/api/tasks/${task._id}`,
        { completed: !task.completed },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onUpdate(response.data);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await axios.delete(`${API_URL}/api/tasks/${task._id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        onDelete(task._id);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/api/tasks/${task._id}`,
        editData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onUpdate(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  if (isEditing) {
    return (
      <div className="task-card editing">
        <input
          type="text"
          value={editData.title}
          onChange={(e) => setEditData({ ...editData, title: e.target.value })}
        />
        <textarea
          value={editData.description}
          onChange={(e) => setEditData({ ...editData, description: e.target.value })}
          rows="2"
        ></textarea>
        <div className="edit-buttons">
          <button onClick={handleSaveEdit} className="save-btn">Save</button>
          <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleComplete}
        />
      </div>
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <div className="task-meta">
          <span className={`priority ${task.priority}`}>{task.priority}</span>
          <span className="category">{task.category}</span>
          {task.dueDate && <span className="due-date">{new Date(task.dueDate).toLocaleDateString()}</span>}
        </div>
      </div>
      <div className="task-actions">
        <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
        <button onClick={handleDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;