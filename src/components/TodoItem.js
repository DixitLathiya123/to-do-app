import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = React.memo(({ task, toggleTask, deleteTask }) => {
  return (
    <li className="todo-item">
      <span
        onClick={toggleTask}
        className={task.completed ? 'completed' : ''}
        title="Click to mark complete/incomplete"
      >
        {task.text}
      </span>
      <button onClick={deleteTask} className="delete-button">Delete</button>
    </li>
  );
});

export default TodoItem;
