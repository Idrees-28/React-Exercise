import React, { useState, useEffect } from 'react';

const TodoItem = () => {
  const [todo, setTodo] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching the data');
        }
        return response.json();
      })
      .then((data) => {
        setTodo(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  return (
    <div>
      <h1>Todo Item</h1>
      {todo && ( 
        <div>
          <p><strong>ID:</strong> {todo.id}</p>
          <p><strong>Title:</strong> {todo.title}</p>
          <p><strong>Status:</strong> {todo.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
