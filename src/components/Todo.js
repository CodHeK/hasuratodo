import React from 'react';
import '../App.css';

const Todo = (props) => (
  <div className="todos">
    <p>{`${props.data.todo_name} created on ${props.data.time}`}</p>
  </div>
)

export default Todo;
