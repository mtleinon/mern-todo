import React from 'react';

export default function TodoItem({
  todoText,
  deleteTodoItem,
  toggleTodoItem,
  done
}) {
  return (
    <p>
      <span style={{ float: 'left', width: '160px' }}>
        <span
          onClick={toggleTodoItem}
          style={
            done
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {todoText}
        </span>
      </span>
      {''}
      <button onClick={deleteTodoItem}>Delete</button>
    </p>
  );
}
