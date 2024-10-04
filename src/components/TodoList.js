import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask }) => (
  <ul>
    {tasks.map((task) => (
      <TodoItem
        key={task.id}
        task={task}
        toggleTask={() => toggleTask(task.id)}
        deleteTask={() => deleteTask(task.id)}
      />
    ))}
  </ul>
);

export default TodoList;
