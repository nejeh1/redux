import React from 'react';

const Task = ({ task, onToggleDone, onDelete, onEdit }) => {
  const { id, description, isDone } = task;
  return (
    <div>
      <span>{description}</span>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => onToggleDone(id)}
      />
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onEdit(id)}>Edit</button>
    </div>
  );
};

export default Task;
