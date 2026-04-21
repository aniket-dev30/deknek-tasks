import React from 'react';
import TaskCard from './TaskCard';
import '../styles/TaskList.css';

function TaskList({ tasks, onDelete, onUpdate, token }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard
          key={task._id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
          token={token}
        />
      ))}
    </div>
  );
}

export default TaskList;